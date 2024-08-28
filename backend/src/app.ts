import express from 'express';
import cors from 'cors';
import { errorHandlerMiddleware, notFoundMiddleware } from './middlewares';
import { router } from './routes';
import { TG_INIT_DATA_HEADER } from './constants';

export function initializeApp(): express.Express {
  const app = express();

  app.use(cors({
    origin: (origin, callback): void => {
      callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
    allowedHeaders: ['x-user', 'X-Signature', 'accept', 'content-type', TG_INIT_DATA_HEADER],
  }));

  app.use(express.json());

  app.use('/api/v1', router);

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
