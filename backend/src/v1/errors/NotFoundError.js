import { HttpError } from './HttpError';

export class NotFoundError extends HttpError {
  constructor() {
    super('Resource not found');
    this.status = 404;
  }
}
