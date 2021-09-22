import { PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';

import { ObjectId } from '@mikro-orm/mongodb';
import { ApiHideProperty } from '@nestjs/swagger';

export abstract class CommonEntity {
  @ApiHideProperty()
  @PrimaryKey()
  _id!: ObjectId;

  @ApiHideProperty()
  @SerializedPrimaryKey()
  id!: string; // string variant of PK, will be handled automatically

  @ApiHideProperty()
  @Property()
  createdAt = new Date();

  @ApiHideProperty()
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
