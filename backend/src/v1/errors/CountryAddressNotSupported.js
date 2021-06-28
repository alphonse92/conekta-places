import { HttpError } from './HttpError';

export class CountryAddressNotSupported extends HttpError {
  constructor(countryId) {
    super(`Country not supported. Country: ${countryId}`);
    this.status = 403;
  }
}
