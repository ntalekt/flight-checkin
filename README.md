# Southwest Auto Check-In System ✈️

[![Python Version](https://img.shields.io/badge/python-3.11%2B-blue)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Stargazers](https://img.shields.io/github/stars/ntalekt/flight-checkin?style=flat)](https://github.com/ntalekt/flight-checkin/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/ntalekt/flight-checkin?style=flat)](https://github.com/ntalekt/flight-checkin/commits/master)

## Project Overview

An automated web application that simplifies Southwest Airlines flight check-ins by providing a user-friendly interface to automatically check into flights.

## Features ✨

- **Automated Check-In**: Seamless integration with Southwest's system
- **Real-time Feedback**: Instant success/error notifications
- **Input Validation**: Client and server-side validation
- **Secure Credentials**: Environment variable management
- **Production Ready**: Dockerized microservices architecture
- **API Documentation**: Built-in Swagger UI

## Security 🔒

- Input sanitization
- Credential encryption
- Rate limiting
- CORS protection
- Error message redaction

## 🛠 Tech Stack

**Backend**:
- Python 3.11
- FastAPI
- Pydantic
- Uvicorn

**Frontend**:
- React 18
- Material-UI
- Formik/Yup

**Check-In Logic**: [auto-southwest-check-in](https://github.com/jdholtz/auto-southwest-check-in)

**Infrastructure**:
- Docker
- Docker Compose
- NGINX

## Prerequisites 📦

- Docker 20.10+
- Docker Compose 2.0+
- Node.js 18.x (dev only)
- Python 3.11 (dev only)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/ntalekt/flight-checkin.git
cd flight-checkin
```

### 2. Clone Southwest Check-In Dependency
```bash
git clone https://github.com/jdholtz/auto-southwest-check-in.git
```

### 3. Create environment file
> [!NOTE]
> Don't need to update but file needs to exist.
```bash
cp .env.example .env
```

### 4. Build and Run
```bash
docker-compose up --build
```

### 5. Verify Installation
```bash
docker compose ps
```
Expected Output:
| NAME | COMMAND | SERVICE | STATUS | PORTS |
|------|---------|---------|--------|-------|
| flight-checkin_backend_1 | "uvicorn src.main:ap…" | backend | running | 0.0.0.0:8000->8000/tcp, :::8000->8000/tcp |
| flight-checkin_frontend_1 | "/docker-entrypoint.…" | frontend | running | 0.0.0.0:3000->80/tcp, :::3000->80/tcp |

### 6. Check Logs
```bash
docker compose logs -f backend
docker compose logs -f frontend
```

## Access the Web UI 🌐
1. Web UI: `http://localhost:3000`
2. API Docs: `http://localhost:8000/api/docs`

### Web UI
![UI](https://i.imgur.com/YzbDLEo.png)

### API Docs
![API](https://i.imgur.com/y2teVwt.png)

## Uninstall
```bash
docker compose down --volumes --rmi all
```

## Configuration ⚙️

**Environment Variables** (`.env`):
```bash
SOUTHWEST_USERNAME=your@email.com
SOUTHWEST_PASSWORD=your_password
REACT_APP_API_URL=/api
```

## Usage 📋

1. Enter your flight confirmation number
2. Input first and last name
3. Click "Check In"
4. Automatic check-in will be processed

## Security Notes 🛡

- Never share your Southwest credentials
- Use secure, unique passwords
- Recommended: Use environment variables or secure credential management

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development 🧑💻

**Backend**:
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn src.main:app --reload
```

**Frontend**:
```bash
cd frontend
npm install
npm start
```

## License 📜

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements 🙏

- [auto-southwest-check-in](https://github.com/jdholtz/auto-southwest-check-in)
- FastAPI & React Communities
- Material-UI Team

## Support 📞

For issues or questions, please [open an issue](https://github.com/ntalekt/flight-checkin/issues)

---

**Disclaimer**: This tool is not officially affiliated with Southwest Airlines. Use responsibly and in accordance with airline policies.
