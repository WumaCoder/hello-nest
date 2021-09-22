import {
  Entity,
  EntityRepositoryType,
  Property,
  Repository,
  wrap,
} from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mongodb';
import { CommonEntity } from 'src/entities/common.entity';

@Entity()
export class User extends CommonEntity {
  [EntityRepositoryType]?: UserRepo;

  @Property()
  name: string;

  @Property()
  username: string;

  @Property()
  password: string;
}

@Repository(User)
export class UserRepo extends EntityRepository<User> {
  async save<T extends User>(user: T): Promise<User> {
    const _user = wrap(new User()).assign(user);
    await super.persistAndFlush(_user);
    return _user;
  }
}
