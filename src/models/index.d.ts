import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Task {
  readonly id: string;
  readonly name: string;
  readonly running: boolean;
  readonly start_time: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class Project {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Client {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Client, ClientMetaData>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client, ClientMetaData>) => MutableModel<Client, ClientMetaData> | void): Client;
}