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
    try {
      const url = `${this.apiUrl}/api/v1/address`;
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(values),
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  getHeaders() {
    return {
      'x-application-id': this.appId,
      'Content-Type': 'application/json',
    };
  }

  async getAdministrativeLevelsInformationFromPostalCode(countryId, postalCode) {
    try {
      const url = `${this.apiUrl}/api/v1/country/${countryId}/info/postalcode/${postalCode}`;
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
