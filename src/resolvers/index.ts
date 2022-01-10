import Query from './Query';
import Mutation from './Mutation';

export class Resolver {
  resolvers = {};

  sendResolver(): any {
    return (this.resolvers = {
      Query,
      Mutation,

      Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
        // userId: async (parent) => {
        //   const user = await
        // },
      },
      User: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        email: (parent) => parent.email,
        links: (parent) => parent,
      },
    });
  }
}
