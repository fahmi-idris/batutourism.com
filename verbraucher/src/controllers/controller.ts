import { FastifyReply } from 'fastify';
import { ServerResponse } from 'http';

export class Controller {
  /**
   * Succes response builder
   *
   * @param response Response
   * @param message string
   * @param data object
   */
  successResponse(response: FastifyReply<ServerResponse>, message: string, data: object) {
    response.status(200);
    return response.send({
      data,
      message,
      success: true,
    });
  }

  /**
   * Not found response
   * This would be used if the resource not found
   *
   * @param response Response
   * @param errors string[]
   * @param errorCode number
   */
  notFoundResponse(response: FastifyReply<ServerResponse>, errors: string[], errorCode: number = 0) {
    response.status(404);
    return response.send({
      errorCode,
      errors,
      success: false,
    });
  }

  /**
   * Internal server error response
   *
   * @param response Response
   * @param errors string[]
   * @param errorCode number
   */
  internalServerErrorresponse(response: FastifyReply<ServerResponse>, errors: string[], errorCode: number = 5) {
    response.status(500);
    return response.send({
      errorCode,
      errors,
      success: false,
    });
  }
}
