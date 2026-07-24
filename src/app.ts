import express, { type Express } from "express";
import { prisma } from "./config/database.js";

const app: Express = express();

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.get("/get-users", async (_req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

export { app };
