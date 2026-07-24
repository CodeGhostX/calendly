import { env } from "../config/env.js"
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.js"

const adapter = new PrismaMariaDb({
  host: env.DB_HOST || '127.0.0.1',
  user: env.DB_USER || 'root',
  password: env.DB_PASSWORD || '',
  database: env.DB_NAME || 'calendly',
  port: Number(env.DB_PORT) || 3306,
  connectionLimit: 5,
});

export const prisma = new PrismaClient({ adapter });

export async function connectToDatabase() {
  try {
    await prisma.$connect();
    console.log(`Connected to DB successfully ✅`)
  } catch (error) {
    console.log(`Database connection failed ❌`)
    process.exit(1);
  }
}