"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MexicoAddress", {
  enumerable: true,
  get: function () {
    return _Mexico.MexicoAddress;
  }
});
Object.defineProperty(exports, "BaseAddress", {
  enumerable: true,
  get: function () {
    return _Base.BaseAddress;
  }
});
exports.getClassAddressByCountry = exports.getAvailableCountries = exports.availableCountriesClass = void 0;

var _Mexico = require("./Mexico");

var _Base = require("./Base");

// Import your own country address class
// import { BrazilAddress } from './Brazil';
const availableCountriesClass = {
  mx: _Mexico.MexicoAddress // br: BrazilAddress,

};
/**
 * This function returns the available countries for a given language.
 * The language is just for lang features purposes
 * @param {*} lang available lang in conekta-language-lib
 * @returns {Object} Object {keyCountry:countryName} i.e. {mx:'Mexico'} for lang en
 */

exports.availableCountriesClass = availableCountriesClass;

const getAvailableCountries = (lang = 'en') => Object.keys(availableCountriesClass).reduce((map, cId) => ({ ...map,
  [availableCountriesClass[cId].id]: availableCountriesClass[cId].getCountryName(lang)
}), {});
/**
 * Return a class for a given country id
 * @param {*} countryId country id. IE mx, co, br, arg ...
 * @returns Country Class
 */


exports.getAvailableCountries = getAvailableCountries;

const getClassAddressByCountry = countryId => {
  const country = availableCountriesClass[countryId];
  if (!country) throw new Error(`Country ${countryId} is not available`);
  return country;
};

exports.getClassAddressByCountry = getClassAddressByCountry;