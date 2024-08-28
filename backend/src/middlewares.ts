import { ErrorRequestHandler, Handler } from 'express';
import { constants } from 'node:http2';
import { isTgInitDataValid } from './services';
import { parse } from '@tma.js/init-data-node';
import { TG_INIT_DATA_HEADER } from './constants';

export const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  return res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).send({
    error: 'Internal server error',
  });
};

export const notFoundMiddleware: Handler = (req, res) => {
  return res.status(constants.HTTP_STATUS_NOT_FOUND).send({
    message: 'Not found',
  });
};

export const tgAuthMiddleware: Handler = (req, res, next) => {
  try {
    const initDataRaw = req.headers[TG_INIT_DATA_HEADER];
    if (typeof initDataRaw !== 'string') {
      return res.status(constants.HTTP_STATUS_BAD_REQUEST).json({ message: 'No tg data provided' });
    }
    if (!isTgInitDataValid(initDataRaw)) {
      return res.status(constants.HTTP_STATUS_UNAUTHORIZED).json({ message: 'Invalid tg init data' });
    }

    const initData = parse(initDataRaw);

    res.locals.tgUserId = initData.user!.id;

    next();
  } catch (err) {
    next(err);
  }
};

