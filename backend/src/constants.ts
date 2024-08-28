import { getEnvOrFail } from './config';

export const TG_INIT_DATA_HEADER = 'tg-init-data';
export const TG_SECRET = getEnvOrFail('TG_SECRET');
