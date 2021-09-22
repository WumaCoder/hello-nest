import { Entity } from '@mikro-orm/core';
import { CommonEntity } from 'src/entities/common.entity';

@Entity()
export class Auth extends CommonEntity {}
