import joblib
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load models and preprocessing objects
imputer = joblib.load('imputer.pkl')
scaler = joblib.load('scaler.pkl')
kmeans = joblib.load('kmeans.pkl')
model = joblib.load('model.pkl')  # StackingClassifier

# Feature order required for input
FEATURE_NAMES = ['cp', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/status', methods=['GET'])
def status():
    return jsonify({"message": "Server is up!"})

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if not data or 'features' not in data:
        return jsonify({'error': f'Missing input features: expected {len(FEATURE_NAMES)} values'}), 400

    input_data = data['features']

    if len(input_data) != len(FEATURE_NAMES):
        return jsonify({'error': f'Expected {len(FEATURE_NAMES)} features: {FEATURE_NAMES}'}), 400

    try:
        # Step 1: Convert to DataFrame
        X_df = pd.DataFrame([input_data], columns=FEATURE_NAMES)

        # Step 2: Impute missing values
        X_imputed = imputer.transform(X_df)

        # Step 3: Scale features
        X_scaled = scaler.transform(X_imputed)

        # Step 4: Predict cluster label
        cluster_label = kmeans.predict(X_scaled).reshape(-1, 1)

        # Step 5: Combine with cluster label
        X_final = np.hstack((X_imputed, cluster_label))

        # Step 6: Predict using model
        prediction = model.predict(X_final)[0]
        probability = model.predict_proba(X_final)[0].tolist()

        return jsonify({
            'prediction': int(prediction),
            'probability': probability
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
