import {
  Entity,
  EntityRepositoryType,
  Property,
  Repository,
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
export class UserRepo extends EntityRepository<User> {}
