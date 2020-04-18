import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';

export interface ApplicationInterface {
  index(req: FastifyRequest<any>, res: FastifyReply<ServerResponse>): Promise<any>;
  show(req: FastifyRequest<any>, res: FastifyReply<ServerResponse>): Promise<any>;
  store(req: FastifyRequest<any>, res: FastifyReply<ServerResponse>): Promise<any>;
  update(req: FastifyRequest<any>, res: FastifyReply<ServerResponse>): Promise<any>;
  destroy(req: FastifyRequest<any>, res: FastifyReply<ServerResponse>): Promise<any>;
}
