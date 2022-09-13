// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Attributes, CoffeeEntry, User, CoffeeEntryAttributes } = initSchema(schema);

export {
  Attributes,
  CoffeeEntry,
  User,
  CoffeeEntryAttributes
};