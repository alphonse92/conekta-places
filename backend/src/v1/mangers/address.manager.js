import { BaseManager } from './base.manager';

export class AddressManager extends BaseManager {
  constructor(Server) {
    super(Server);
    this.model = this.Server.mongo.models.address;
  }

  static extractAddressModelData() {

  }

  async create(data) {
    const cleanedData = data;
    return super.create(cleanedData);
  }

  async update(id, data) {
    const cleanedData = data;
    return super.update(cleanedData);
  }
}
