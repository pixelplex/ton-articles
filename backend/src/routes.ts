import express from 'express';
import { usersRepository } from './repositories';
import { tgAuthMiddleware } from './middlewares';

const router = express.Router();

router.get('/me', tgAuthMiddleware, async (req, res, next) => {
  try {
    const tgUserId = res.locals.tgUserId as number;

    let user = await usersRepository.findOneBy({ tgUserId });
    if (!user) {
      user = await usersRepository.save({ tgUserId });
    }

    return res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/click', tgAuthMiddleware, async (req, res, next) => {
  try {
    const tgUserId = res.locals.tgUserId as number;

    await usersRepository.update({ tgUserId }, { clicks: () => 'clicks + 1' });

    return res.send();
  } catch (err) {
    next(err);
  }
});


export { router };
