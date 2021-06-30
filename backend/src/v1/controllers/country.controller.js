import { getAvailableCountries } from 'conekta-places-lib/dist/helpers/country';

import { CountryManager } from '../mangers/country.manager';
import { AddressManager } from '../mangers/address.manager';
import { BaseController } from './base.controller';
import { getPaginationDataFromRequest } from '../../util.js/pagination';

export class CountryController extends BaseController {

  constructor(Server) {
    super(Server);
    this.manager = new CountryManager(Server);
    this.addressManager = new AddressManager(Server);
  }

  getAvailable(req, res) {
    const availableCountries = getAvailableCountries();
    res.send(availableCountries);
  }

  async getPostalCodeInfo(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { countryId, postalCode } = req.params;
      const info = await this.manager.getPostalCode(countryId, postalCode);
      return res.send(info);
    });
  }

  async getAddresses(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { countryId: cId = '' } = req.params;
      const countryId = cId.toLowerCase();
      const paginationData = getPaginationDataFromRequest(this.Server, req);
      const list = await this.addressManager.list({ countryId }, paginationData);
      return res.send(list);
    });
  }

  async saveAddress(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { params, body } = req;
      const { countryId } = params;
      const data = { ...body, countryId };
      const result = await this.addressManager.create(data);
      res.send(result);
    });
  }


  async deleteAddress(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { params } = req;
      const { id } = params;
      const result = await this.addressManager.delete(id);
      res.send(result);
    });
  }
}
