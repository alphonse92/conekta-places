import { CountryManager } from '../mangers/country.manager';
import { BaseController } from './base.controller';

export class CountryController extends BaseController {

  constructor(Server) {
    super(Server);
    this.manager = new CountryManager(Server);
  }

  getAvailable(req, res) {
    res.send(this.manager.getAvailable());
  }

  async getPostalCodeInfo(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { countryId, postalCode } = req.params;
      const info = await this.manager.getPostalCode(countryId, postalCode);
      return res.send(info);
    });
  }
}
