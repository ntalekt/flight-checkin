from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route('/checkin', methods=['POST'])
def auto_checkin():
    data = request.get_json()
    try:
        result = subprocess.run(
            ['python3', 'auto-southwest-check-in/southwest.py',
             data['confirmation'],
             data['first_name'],
             data['last_name']],
            capture_output=True,
            text=True
        )
        return jsonify({
            "status": "success",
            "output": result.stdout
        }), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
