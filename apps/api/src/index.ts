import cookie_parser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // IMPORTANT: loads the environment variables from the .env file, before importing env.ts

import { env } from './env';

async function main() {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      credentials: true,
    })
  );

  app.use(cookie_parser());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.send('API is running');
  });

  app.listen(env.API_SERVER_PORT, () => {
    console.log(`Server is running on port ${env.API_SERVER_PORT}`);
  });
}

main();
