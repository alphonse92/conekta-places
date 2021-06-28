import { HttpError } from './HttpError';

export class InvalidCountryAddress extends HttpError {
  constructor(country, field, type) {
    super(`Invalid input form for country: ${country}. Field: ${field} type: ${type}`);
    this.status = 403;
  }
}
