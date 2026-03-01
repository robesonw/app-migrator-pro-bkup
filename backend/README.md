# Backend Service

## Quickstart
1. Clone the repository.
2. Run `docker-compose up` to start the services.

## Environment Variables
| Variable                | Description                                 |
|-------------------------|---------------------------------------------|
| DATABASE_URL            | Connection string for PostgreSQL            |
| JWT_SECRET              | Secret for JWT access token                 |
| JWT_REFRESH_SECRET      | Secret for JWT refresh token                |
| PORT                    | Port for backend service (default: 4000)   |
| CORS_ORIGIN             | Allowed CORS origin                          |
| AI_PROVIDER             | AI service provider (e.g., openai)        |
| AI_MODEL                | Model to use for AI (e.g., gpt-4)         |
| AI_API_KEY             | API key for the AI provider                 |

## API Reference

### Auth Routes
- **POST** `/api/auth/register`
- **POST** `/api/auth/login`
- **GET** `/api/auth/me`
- **POST** `/api/auth/refresh`

### Upload Route
- **POST** `/api/upload`

### AI Route
- **POST** `/api/ai/invoke`

### Email Route
- **POST** `/api/email/send`