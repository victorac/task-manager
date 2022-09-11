// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, Project, Client } = initSchema(schema);

export {
  Task,
  Project,
  Client
};