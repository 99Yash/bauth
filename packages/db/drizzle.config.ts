import { type Config } from 'drizzle-kit';
import { env } from './src/env';

export default {
  schema: './src/schemas/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ['*'],
  verbose: true, // Print all statements
  // Always ask for confirmation
  strict: true,
} satisfies Config;
