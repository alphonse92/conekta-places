"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassAddressByCountry = exports.getAvailableCountries = exports.availableCountriesClass = void 0;

var _Mexico = require("../schemas/models/CountryAddress/Mexico");

const availableCountriesClass = {
  mx: _Mexico.MexicoAddress
};
exports.availableCountriesClass = availableCountriesClass;

const getAvailableCountries = (lang = 'en') => Object.keys(availableCountriesClass).reduce((map, cId) => ({ ...map,
  [availableCountriesClass[cId].id]: availableCountriesClass[cId].getCountryName(lang)
}), {});

exports.getAvailableCountries = getAvailableCountries;

const getClassAddressByCountry = countryId => {
  const country = availableCountriesClass[countryId];
  if (!country) throw new Error(`Country ${countryId} is not available`);
  return country;
};

exports.getClassAddressByCountry = getClassAddressByCountry;