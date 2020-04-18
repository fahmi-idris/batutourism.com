import * as fastify from 'fastify';
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';

import { KEY } from './config/config';
import { Database } from './config/database';
import userMethods from './controllers/user/usersController';

const server = fastify();
const db = new Database();

config({
  path: './.env',
});

db.databaseURI = process.env.DB_URI;
db.connect();

server.get('/', (req, res) => {
  res.send('Welcome to the Typescript Boilerplate');
});

server.post('/api/register', async (req, res) => {
  const { body } = req;
  const token = await userMethods.addUser({ ...body });

  res.send({
    token,
  });
});

server.post('/api/login', async (req, res) => {
  const { body } = req;
  const token = await userMethods.login({ ...body });

  res.send({
    token,
  });
});

server.get('/api/me', async (req, res) => {
  const { headers } = req;
  const { authorization } = headers;

  const token: any = jwt.verify(authorization.substring(4), KEY);

  const user = await userMethods.user(token.id);

  res.send(user);
});

server.listen(3001, (err) => {
  if (err) {
    console.log('❌ Error: ', err);
    process.exit(1);
  }
  console.log('Server Started on port - 3001');
});
