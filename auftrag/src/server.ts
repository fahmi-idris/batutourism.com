import * as fastify from 'fastify';
import { config } from 'dotenv';

import { router } from './http/routes';
import { Database } from './config/database';

const server = fastify();
const db = new Database();

config({
  path: './.env',
});

db.databaseURI = process.env.DB_URI;
db.connect();
router(server);

server.listen(3003, (err) => {
  if (err) {
    console.log('❌ Error: ', err);
    process.exit(1);
  }
  console.log('Server Started on port - 3003');
});
