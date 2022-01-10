import { ApolloServer } from 'apollo-server';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Resolver } from './resolvers';

config();

const resolver = new Resolver();
const resolvers = resolver.sendResolver();

const schema = fs.readFileSync(
  path.join(__dirname, 'schema', 'schema.graphql'),
  'utf8',
);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const startServer = () => {
  try {
    server
      .listen({ port: process.env.PORT })
      .then(({ url }) => console.log(`Server is running on ${url}`));

    createConnection().then(() => {
      console.log('DATABASE has successfully connected');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
