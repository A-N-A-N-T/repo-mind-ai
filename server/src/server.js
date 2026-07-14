import app from './app.js';
import { env } from './config/env.js';
import { connectDB } from './database/mongodb.js';



const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT} (${env.NODE_ENV})`);
    });
  } catch {
    process.exit(1);
  }
};

startServer();

