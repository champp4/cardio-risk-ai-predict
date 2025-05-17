
import config from '@/config';

/**
 * Service to handle interactions with the cardiac prediction API
 */

export interface PredictionInput {
  features: number[];
}

export interface PredictionResult {
  prediction: number;
  probability: number[];
}

const API_URL = config.api.baseUrl;

/**
 * Sends clinical parameters to the prediction API
 * @param features Array of clinical features in order: cp, thalach, exang, oldpeak, slope, ca, thal
 * @returns The prediction result with risk level and confidence
 */
export async function getPrediction(features: number[]): Promise<PredictionResult> {
  try {
    console.log('Sending prediction request to:', `${API_URL}/predict`);
    console.log('Request payload:', JSON.stringify({ features }));
    
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ features }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch prediction');
    }

    const result = await response.json();
    console.log('Prediction result:', result);
    return result;
  } catch (error) {
    console.error('Prediction API error:', error);
    throw error;
  }
}

/**
 * Formats form values to match the expected API input format
 * @param formValues Form values from the risk assessment form
 * @returns Array of numeric features in the correct order for the API
 */
export function formatFormValuesToApiInput(formValues: Record<string, string | number>): number[] {
  // Order matters: cp, thalach, exang, oldpeak, slope, ca, thal - exactly as expected by Flask backend
  return [
    Number(formValues.cp),
    Number(formValues.thalach),
    Number(formValues.exang),
    Number(formValues.oldpeak),
    Number(formValues.slope),
    Number(formValues.ca),
    Number(formValues.thal)
  ];
}
