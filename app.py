import joblib
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(
    __name__,
    static_folder="static",
    static_url_path="/"
)

CORS(app)

# Load models
imputer = joblib.load('imputer.pkl')
scaler = joblib.load('scaler.pkl')
kmeans = joblib.load('kmeans.pkl')
model = joblib.load('model.pkl')

FEATURE_NAMES = ['cp','thalach','exang','oldpeak','slope','ca','thal']


# Serve React app
@app.route("/")
def home():
    return send_from_directory("static", "index.html")


# IMPORTANT — fallback for React routing
@app.route("/<path:path>")
def static_proxy(path):
    return send_from_directory("static", path)


@app.route('/status')
def status():
    return jsonify({"message": "Server is up!"})


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if not data or 'features' not in data:
        return jsonify({'error': 'Missing input features'}), 400

    try:
        X_df = pd.DataFrame([data['features']], columns=FEATURE_NAMES)
        X_imputed = imputer.transform(X_df)
        X_scaled = scaler.transform(X_imputed)
        cluster = kmeans.predict(X_scaled).reshape(-1,1)
        X_final = np.hstack((X_imputed, cluster))

        pred = model.predict(X_final)[0]
        prob = model.predict_proba(X_final)[0].tolist()

        return jsonify({
            "prediction": int(pred),
            "probability": prob
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
