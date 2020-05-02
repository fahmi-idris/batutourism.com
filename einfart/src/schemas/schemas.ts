import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const schemaTypeDefs = fileLoader('./src/schemas/entities/**/*.gql', {
  recursive: true
});

export default mergeTypes(schemaTypeDefs, { all: true });
