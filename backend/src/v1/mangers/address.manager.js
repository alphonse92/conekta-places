import _pick from 'lodash/pick';
import { getCountrySegmentsExtrator } from 'conekta-places-lib/dist/helpers/address';
import addressFieldValidatorByCountry from 'conekta-places-lib/dist/schemas/models/validators';

import { BaseManager } from './base.manager';
import { CountryAddressNotSupported } from '../errors/CountryAddressNotSupported';
import { InvalidCountryAddress } from '../errors/InvalidCountryAddress';
import { CountryIsRequired } from '../errors/CountryRequired';

export class AddressManager extends BaseManager {
  constructor(Server) {
    super(Server);
    this.model = this.Server.mongo.models.address;
  }

  async list({ countryId }, pagination) {
    const list = await super.list({ countryId }, pagination);
    return list;
  }

  async processRequestBody(data) {
    const { countryId, ...values } = data;
    if (!countryId) throw new CountryIsRequired();

    const countryValidator = addressFieldValidatorByCountry[countryId.toLowerCase()];
    if (!countryValidator) throw new CountryAddressNotSupported(countryId);

    const addressKeys = this.getAdddressKeys(countryId);
    const segments = _pick(values, addressKeys);

    try {
      await countryValidator.validate(segments);
    } catch (e) {
      const { errors = [], path: field = '' } = e;
      const [errorText] = errors;

      throw new InvalidCountryAddress(countryId, field, errorText);
    }

    return { countryId, segments };
  }

  getAdddressKeys(countryId) {
    const countrySegmentsExtrator = getCountrySegmentsExtrator(countryId.toLowerCase());
    const emptySegments = countrySegmentsExtrator();
    return Object.keys(emptySegments);
  }

  async create(data) {
    const address = await this.processRequestBody(data);
    return super.create(address);
  }

  async update(id, data) {
    const cleanedData = data;
    return super.update(cleanedData);
  }
}
