import { mergeResolvers } from 'merge-graphql-schemas';

import hotelResolver from './entities/hotel/schema.resolver';

const resolvers = [hotelResolver];

export default mergeResolvers(resolvers);
