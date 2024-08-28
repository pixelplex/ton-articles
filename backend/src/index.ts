import { initializeApp } from './app';
import * as http from 'node:http';
import { getEnvOrFail } from './config';
import { appDataSource } from './data-source';

async function main() {
  await appDataSource.initialize();
  console.log('Database initialized');

  const app = initializeApp();

  const server = http.createServer(app);

  const port = getEnvOrFail('PORT', Number);

  server.listen(port, () => console.log(`Listening on port ${port}`));
}

main().catch(console.error);
