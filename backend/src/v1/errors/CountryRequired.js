import { HttpError } from './HttpError';

export class CountryIsRequired extends HttpError {
  constructor() {
    super('Country id is required');
    this.status = 400;
  }
}
