import expect from 'expect';

import {
  BaseAddress,
  availableCountriesClass,
  getAvailableCountries,
  getClassAddressByCountry,
} from './index';

describe('Testing Mexico Address', () => {
  it('Should availableCountriesClass returns an object which contains Country address class', () => {
    expect(availableCountriesClass).toBeTruthy();
    expect(Object.keys(availableCountriesClass)).toBeInstanceOf(Array);
    expect(new (Object.values(availableCountriesClass)[0])()).toBeInstanceOf(BaseAddress);
  });

  it('Should return a object where the key is a country id and the value is the country name in a given lang', () => {
    const availableCountries = getAvailableCountries();
    expect(availableCountries).toBeTruthy();
    expect(Object.keys(availableCountriesClass).sort()).toStrictEqual(Object.keys(availableCountries).sort());
  });

  it('Should return a object where the key is a country id and the value is the country name in a given lang', () => {
    const countryId = Object.keys(availableCountriesClass)[0];
    const CountryClass = Object.values(availableCountriesClass)[0];

    expect(getClassAddressByCountry(countryId)).toBe(CountryClass);
  });
});
