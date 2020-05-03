import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';

import { BookingProvider } from './providers/booking/provider';
import { HotelProvider } from './providers/hotel/provider';
import { RoomProvider } from './providers/room/provider';
import { UserProvider } from './providers/user/provider';
import resolvers from './schemas/resolvers';
import typeDefs from './schemas/schemas';

// This is where we define the context type which is used
// to have correct typing when using context in the resolvers.
export interface Context {
  dataSources: {
    hotelProvider: HotelProvider;
    userProvider: UserProvider;
    roomProvider: RoomProvider;
    bookingProvider: BookingProvider;
  };
}

// This is where we define the dataSources which can be
// used to retrieve data from the resolvers.
const dataSources = (): Context['dataSources'] => {
  return {
    hotelProvider: new HotelProvider(),
    userProvider: new UserProvider(),
    roomProvider: new RoomProvider(),
    bookingProvider: new BookingProvider()
  };
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: true
});

// Load env file
config({
  path: './.env'
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
});
