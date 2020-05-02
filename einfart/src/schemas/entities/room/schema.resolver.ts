import { IResolvers } from 'graphql-tools';

const schemaResolvers: IResolvers = {
  Query: {
    room: (_, args, { dataSources }) => dataSources.roomProvider.getRoom(args)
  },
  Mutation: {
    createRoom: (_, args, { dataSources }) =>
      dataSources.roomProvider.createRoom(args),
    availableRoom: (_, args, { dataSources }) =>
      dataSources.roomProvider.availableRoom(args)
  }
};

export default schemaResolvers;
