import { AddressManager } from '../mangers/address.manager';
import { BaseController } from './base.controller';

export class AddressController extends BaseController {

  constructor(Server) {
    super(Server);
    this.manager = new AddressManager(this.Server);
  }

  async getAddress(req, res) {
    // Do something to store  in database
    res.send('ok');
  }

  async getList(req, res) {
    // Do something to store  in database
    res.send('ok');
  }

  async saveAddress(req, res) {
    const { body } = req;
    // Do something to store  in database
    res.send({ body, config: this.Server.config });
  }

  async updateAddress(req, res) {
    const { body } = req;
    // Do something to store  in database
    res.send(body);
  }

  async deleteAddress(req, res) {
    // Do something to store  in database
    res.send('ok');
  }
}
