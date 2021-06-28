import { ManagerNotStarted } from "../errors/ManagerNotStarted";

export class BaseManager {
  constructor(Server) {
    this.Server = Server;
  }

  checkByInit() {
    if (!this.model) {
      throw new ManagerNotStarted();
    }
  }

  async get(id) {
    this.checkByInit();
  }

  async getMany(id) {
    this.checkByInit();
  }

  async list(query, pagination) {
    this.checkByInit();
  }

  async create(data) {
    this.checkByInit();
  }

  async update(id, data) {
    this.checkByInit();
  }

  async delete(id) {
    this.checkByInit();
  }
}
