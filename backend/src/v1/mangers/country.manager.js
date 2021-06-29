import addressFieldValidatorByCountry from 'conekta-places-lib/dist/schemas/models/validators';
import { CountryIsNotSupported } from '../errors/CountryIsNotSupported';
import { getPostalCodeService } from '../services/postalcode/postalcode.service';
import { BaseManager } from './base.manager';

export class CountryManager extends BaseManager {
  getAvailable() {
    return Object.keys(addressFieldValidatorByCountry);
  }

  async getPostalCode(countryId, postalCode) {
    const service = getPostalCodeService(countryId);

    if (!service) {
      throw new CountryIsNotSupported();
    }

    return await service(postalCode);
  }

}
