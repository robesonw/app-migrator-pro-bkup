import dotenv from 'dotenv';
dotenv.config();

const { PORT, JWT_SECRET, JWT_REFRESH_SECRET, CORS_ORIGIN, DATABASE_URL, AI_PROVIDER, AI_API_KEY, AI_MODEL } = process.env;

export const config = {
    port: Number(PORT) || 4000,
    jwtSecret: JWT_SECRET,
    jwtRefreshSecret: JWT_REFRESH_SECRET,
    jwtExpiresIn: '15m',
    refreshExpiresIn: '7d',
    corsOrigin: CORS_ORIGIN,
    databaseUrl: DATABASE_URL,
    aiProvider: AI_PROVIDER,
    aiApiKey: AI_API_KEY,
    aiModel: AI_MODEL
};