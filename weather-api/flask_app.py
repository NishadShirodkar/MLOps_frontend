from flask import Flask, request, jsonify
import boto3
import json


app = Flask(__name__)

# --- AWS CONFIG ---
SAGEMAKER_ENDPOINT = "your-endpoint-name-here"  # replace with actual endpoint name
AWS_REGION = "eu-north-1"  # change if needed
AWS_ACCESS_KEY_ID="AKIA5CLRRUBXDERDQFGM"
AWS_SECRET_ACCESS_KEY="tfBEzbdRd+fCWxBLs5LRljOee+e3FiiE+ydEu2FB"

# Initialize SageMaker runtime client
runtime_client = boto3.client(
    "sagemaker-runtime",
    region_name=AWS_REGION,
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Receive JSON payload
        payload = request.get_json()
        
        # Convert to JSON string
        input_str = json.dumps(payload)
        
        # Call SageMaker endpoint
        response = runtime_client.invoke_endpoint(
            EndpointName=SAGEMAKER_ENDPOINT,
            ContentType="application/json",
            Body=input_str
        )

        # Parse prediction
        result = json.loads(response["Body"].read().decode())
        return jsonify({"success": True, "prediction": result})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
