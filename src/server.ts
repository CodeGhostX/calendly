import { app } from './app.js';
// import { connectToDatabase } from './config/database.js';
import { env } from './config/env.js';

export const startServer = async () => {
  // await connectToDatabase();
  app.listen(env.PORT, () => {
    console.log(`[Server]: running on PORT ${env.PORT}`);
  })
}

startServer();