export class ConektaPlacesService {
  constructor({
    apiUrl,
    appId,
  }) {
    this.serviceName = 'conekta';
    this.apiUrl = apiUrl;
    this.appId = appId;
  }

  async getAddress(id) {
    try {
      const url = `${this.apiUrl}/api/v1/address/${id}`;
      const headers = this.getHeaders();
      const response = await fetch(url, { method: 'GET', headers });
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async getCountryAddresses(countryId, { page, limit }) {
    try {
      const params = new URLSearchParams({ page, limit });
      const url = `${this.apiUrl}/api/v1/country/${countryId}/address/?${params}`;
      const headers = this.getHeaders();
      const response = await fetch(url, { method: 'GET', headers });
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async getAvailableCountries() {
    try {
      const url = `${this.apiUrl}/api/v1/country/available`;
      const headers = this.getHeaders();
      const response = await fetch(url, { method: 'GET', headers });
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return [];
    }
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

  async deleteAddress(id) {
    try {
      const url = `${this.apiUrl}/api/v1/country/address/${id}`;
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: 'DELETE',
        headers,
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
