import 'dotenv/config';

export const env = {
  PORT: process.env.PORT || 3001,
  // Database Variables
  DATABASE_URL: process.env.DATABASE_URL,
  DB_HOST: process.env.DATABASE_HOST,
  DB_USER: process.env.DATABASE_USER,
  DB_PASSWORD: process.env.DATABASE_PASSWORD,
  DB_NAME: process.env.DATABASE_NAME,
  DB_PORT: process.env.DATABASE_PORT,
  NODE_ENV: process.env.NODE_ENV
};
