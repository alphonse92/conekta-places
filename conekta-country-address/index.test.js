const expect = require('expect');

const {
  BaseAddress,
  MexicoAddress,
  availableCountriesClass,
  getAvailableCountries,
  getClassAddressByCountry,
} = require('./dist/index');

describe('Testing integration of dist module', () => {
  it('Should the classes be exported', () => {
    expect(BaseAddress).toBeTruthy();
    expect(MexicoAddress).toBeTruthy();
    expect(availableCountriesClass).toBeTruthy();
    expect(getAvailableCountries).toBeTruthy();
    expect(getClassAddressByCountry).toBeTruthy();
  });
});
