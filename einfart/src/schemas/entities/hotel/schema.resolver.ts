import { IResolvers } from 'graphql-tools';

const hotelResolver: IResolvers = {
  Query: {
    hotels: (_, __, { dataSources }) => dataSources.hotelProvider.getHotels(),
    hotel: (_, args, { dataSources }) =>
      dataSources.hotelProvider.getHotel(args),
    searchHotel: (_, args, { dataSources }) =>
      dataSources.hotelProvider.searchHotel(args)
  },
  Mutation: {
    createHotel: (_, args, { dataSources }) =>
      dataSources.hotelProvider.createHotel(args),
    updateHotel: (_, args, { dataSources }) =>
      dataSources.hotelProvider.updateHotel(args),
    deleteHotel: (_, args, { dataSources }) =>
      dataSources.hotelProvider.deleteHotel(args)
  }
};

export default hotelResolver;
