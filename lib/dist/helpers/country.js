"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvailableCountries = void 0;

var _language = require("./language");

const getAvailableCountries = (lang = 'en') => {
  const getString = (0, _language.getLanguageSelector)(lang);
  return {
    mx: getString('COUNTRY_MX')
  };
};

exports.getAvailableCountries = getAvailableCountries;