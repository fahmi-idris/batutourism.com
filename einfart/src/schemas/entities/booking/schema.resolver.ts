import { IResolvers } from 'graphql-tools';

const schemaResolvers: IResolvers = {
  Query: {
    booking: (_, args, { dataSources }) =>
      dataSources.bookingProvider.getBooking(args)
  },
  Mutation: {
    booking: (_, args, { dataSources }) =>
      dataSources.bookingProvider.booking(args)
  }
};

export default schemaResolvers;
