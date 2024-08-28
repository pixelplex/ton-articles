import { appDataSource } from './data-source';
import { UserEntity } from './entities';

export const usersRepository = appDataSource.getRepository(UserEntity);
