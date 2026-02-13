# ---------- Builder ----------
FROM python:3.10-slim AS builder

WORKDIR /install
COPY requirements.txt .

RUN pip install --prefix=/install --no-cache-dir -r requirements.txt


# ---------- Final ----------
FROM python:3.10-slim

WORKDIR /app

COPY --from=builder /install /usr/local
COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
