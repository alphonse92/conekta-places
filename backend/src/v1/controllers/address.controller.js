import { AddressManager } from '../mangers/address.manager';
import { BaseController } from './base.controller';

export class AddressController extends BaseController {

  constructor(Server) {
    super(Server);
    this.manager = new AddressManager(this.Server);
  }

  async getAddress(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { id } = req.params;
      const result = await this.manager.get(id);
      res.send(result);
    });
  }

  async getList(req, res) {
    // Do something to store  in database
    res.send('ok');
  }

  async saveAddress(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { body } = req;
      const result = await this.manager.create(body);
      res.send(result);
    });
  }

  async updateAddress(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { body, params } = req;
      const { id } = params;
      const result = await this.manager.update(id, body);
      res.send(result);
    });
  }

  async deleteAddress(req, res) {
    // Do something to store  in database
    res.send('ok');
  }
}
