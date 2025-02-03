import subprocess
import logging
from .schemas import CheckInResponse

logger = logging.getLogger(__name__)


def execute_checkin(command: list) -> CheckInResponse:
    try:
        result = subprocess.run(command, capture_output=True, text=True, timeout=30)

        if result.returncode != 0:
            error_msg = result.stderr or "Unknown error occurred"
            return CheckInResponse(status="error", output=sanitize_error(error_msg))

        return CheckInResponse(status="success", output=result.stdout.strip())

    except subprocess.TimeoutExpired:
        return CheckInResponse(status="error", output="Check-in process timed out")
    except Exception as e:
        logger.error(f"Critical error: {str(e)}")
        return CheckInResponse(status="error", output="Internal server error")


def sanitize_error(error: str) -> str:
    sensitive_keys = ["USERNAME", "PASSWORD", "EMAIL"]
    for key in sensitive_keys:
        error = error.replace(key, "***")
    return error
