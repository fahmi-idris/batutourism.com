import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const schemaResolvers = fileLoader('./src/schemas/entities/**/*.resolver.ts', {
  recursive: true
});

export default mergeResolvers(schemaResolvers);
