import { validate } from '@tma.js/init-data-node';
import { TG_SECRET } from './constants';

export function isTgInitDataValid(initDataRaw: string) {
  try {
    validate(initDataRaw, TG_SECRET);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
