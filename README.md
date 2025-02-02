# Southwest Auto Check-In Tool 🛫

## Project Overview

An automated web application that simplifies Southwest Airlines flight check-ins by providing a user-friendly interface to automatically check into flights.

## 🌟 Features

- Automated Southwest Airlines check-in
- Simple, intuitive web interface
- Docker-based deployment
- Cross-platform compatibility

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Python (Flask)
- **Containerization**: Docker
- **Check-In Logic**: [auto-southwest-check-in](https://github.com/jdholtz/auto-southwest-check-in)

## 📦 Prerequisites

- Docker
- Docker Compose
- Git

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

### 3. Build and Run
```bash
docker-compose up --build
```

### 4. Verify Installation
```bash
docker compose ps
```
Expected Output:
| NAME | COMMAND | SERVICE | STATUS | PORTS |
|------|---------|---------|--------|-------|
| flight-checkin_backend_1 | "python checkin.py" | backend | running | 0.0.0.0:5000->5000/tcp, :::5000->5000/tcp |
| flight-checkin_frontend_1 | "/docker-entrypoint.…" | frontend | running | 0.0.0.0:3000->80/tcp, :::3000->80/tcp |

### 5. Check Logs
```bash
docker compose logs -f backend
docker compose logs -f frontend
```

## 🌐 Access the Web UI
1. Open browser to `http://localhost:3000`

### Base UI
![UI](https://i.imgur.com/A8PxWDv.png)

## Uninstall
```bash
docker compose down --volumes --rmi all
```

## 📋 Usage

1. Enter your flight confirmation number
2. Input first and last name
3. Click "Check In Now"
4. Automatic check-in will be processed

## 🛡 Security Notes

- Never share your Southwest credentials
- Use secure, unique passwords
- Recommended: Use environment variables or secure credential management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙌 Acknowledgments

- [auto-southwest-check-in](https://github.com/jdholtz/auto-southwest-check-in) Project
- Southwest Airlines

## 📞 Support

For issues or questions, please [open an issue](https://github.com/ntalekt/flight-checkin/issues)

---

**Disclaimer**: This tool is not officially affiliated with Southwest Airlines. Use responsibly and in accordance with airline policies.
