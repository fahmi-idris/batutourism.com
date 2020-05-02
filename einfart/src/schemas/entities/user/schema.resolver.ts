import { IResolvers } from 'graphql-tools';

const schemaResolvers: IResolvers = {
  Query: {
    user: (_, args, { dataSources }) => dataSources.userProvider.getUser(args)
  },
  Mutation: {
    createUser: (_, args, { dataSources }) =>
      dataSources.userProvider.createUser(args)
  }
};

export default schemaResolvers;
