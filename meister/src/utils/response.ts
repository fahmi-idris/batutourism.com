export class ResponseBuilder {
  /**
   * Error response builder
   *
   * @param {*} message
   * @param {*} errors
   * @param {*} errorCode
   */
  static error(message: string, errors: string[] = [], errorCode: number = 5) {
    return {
      message,
      errorCode,
      errors,
      success: false,
    };
  }
}
