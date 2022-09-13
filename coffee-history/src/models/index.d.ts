import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type AttributesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoffeeEntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoffeeEntryAttributesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Attributes {
  readonly id: string;
  readonly name?: string | null;
  readonly coffeeentrys?: (CoffeeEntryAttributes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Attributes, AttributesMetaData>);
  static copyOf(source: Attributes, mutator: (draft: MutableModel<Attributes, AttributesMetaData>) => MutableModel<Attributes, AttributesMetaData> | void): Attributes;
}

export declare class CoffeeEntry {
  readonly id: string;
  readonly name?: string | null;
  readonly nickname?: string | null;
  readonly img?: string | null;
  readonly rating?: number | null;
  readonly userID: string;
  readonly Attributes?: (CoffeeEntryAttributes | null)[] | null;
  readonly attributes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CoffeeEntry, CoffeeEntryMetaData>);
  static copyOf(source: CoffeeEntry, mutator: (draft: MutableModel<CoffeeEntry, CoffeeEntryMetaData>) => MutableModel<CoffeeEntry, CoffeeEntryMetaData> | void): CoffeeEntry;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly nickname?: string | null;
  readonly CoffeeEntries?: (CoffeeEntry | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class CoffeeEntryAttributes {
  readonly id: string;
  readonly attributes: Attributes;
  readonly coffeeEntry: CoffeeEntry;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CoffeeEntryAttributes, CoffeeEntryAttributesMetaData>);
  static copyOf(source: CoffeeEntryAttributes, mutator: (draft: MutableModel<CoffeeEntryAttributes, CoffeeEntryAttributesMetaData>) => MutableModel<CoffeeEntryAttributes, CoffeeEntryAttributesMetaData> | void): CoffeeEntryAttributes;
}