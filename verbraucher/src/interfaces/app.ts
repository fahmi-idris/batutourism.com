import { FastifyReply, FastifyRequest, DefaultQuery, DefaultParams, DefaultHeaders } from 'fastify';
import { ServerResponse, IncomingMessage } from 'http';

export interface ApplicationInterface {
  index(
    req: FastifyRequest<IncomingMessage, DefaultQuery, DefaultParams, DefaultHeaders, any>,
    res: FastifyReply<ServerResponse>,
  ): Promise<any>;
  show(
    req: FastifyRequest<IncomingMessage, DefaultQuery, DefaultParams, DefaultHeaders, any>,
    res: FastifyReply<ServerResponse>,
  ): Promise<any>;
  store(
    req: FastifyRequest<IncomingMessage, DefaultQuery, DefaultParams, DefaultHeaders, any>,
    res: FastifyReply<ServerResponse>,
  ): Promise<any>;
  update(
    req: FastifyRequest<IncomingMessage, DefaultQuery, DefaultParams, DefaultHeaders, any>,
    res: FastifyReply<ServerResponse>,
  ): Promise<any>;
  destroy(
    req: FastifyRequest<IncomingMessage, DefaultQuery, DefaultParams, DefaultHeaders, any>,
    res: FastifyReply<ServerResponse>,
  ): Promise<any>;
}
