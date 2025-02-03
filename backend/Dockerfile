# Builder stage
FROM python:3.11-slim as builder

WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# Runtime stage
FROM python:3.11-slim
WORKDIR /app

ENV PATH="/root/.local/bin:${PATH}" \
    PYTHONPATH=/app

COPY --from=builder /root/.local /root/.local
COPY backend/src /app/src
COPY .env /app/.env

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
