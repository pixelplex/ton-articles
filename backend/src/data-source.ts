import { DataSource } from 'typeorm';
import { getEnvOrFail } from './config';

import * as Entities from './entities';

const entities = Object.values(Entities);

export const appDataSource = new DataSource({
  type: 'postgres',
  host: getEnvOrFail('DB_HOST'),
  port: getEnvOrFail('DB_PORT', Number),
  username: getEnvOrFail('DB_USERNAME'),
  password: getEnvOrFail('DB_PASSWORD'),
  database: getEnvOrFail('DB_NAME'),
  entities,
  synchronize: true,
  logging: false,
});
