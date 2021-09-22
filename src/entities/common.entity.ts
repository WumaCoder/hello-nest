import { PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';

import { ObjectId } from '@mikro-orm/mongodb';

export abstract class CommonEntity {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // string variant of PK, will be handled automatically

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
