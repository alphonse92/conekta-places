export class ConektaPlacesService {
  constructor({
    apiUrl,
    appId,
  }) {
    this.serviceName = 'conekta';
    this.apiUrl = apiUrl;
    this.appId = appId;
  }

  async saveAddress(values) {
    const {
      apiUrl,
      appId,
    } = this;

    console.log({
      values,
      apiUrl,
      appId,
    });
  }
}
