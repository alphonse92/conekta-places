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

  getHeaders() {
    return {
      'x-application-id': this.appId,
    };
  }

  async getAdministrativeLevelsInformationFromPostalCode(countryId, postalCode) {
    try {
      const url = `${this.apiUrl}/api/info/${countryId}/postalcode/${postalCode}`;
      const headers = this.getHeaders();
      const response = await fetch(url, { method: 'GET', headers });
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
