import { MexicoAddress } from './Mexico';
import { BaseAddress } from './Base';
// Import your own country address class
// import { BrazilAddress } from './Brazil';

const availableCountriesClass = {
  mx: MexicoAddress,
  // br: BrazilAddress,
};

/**
 * This function returns the available countries for a given language.
 * The language is just for lang features purposes
 * @param {*} lang available lang in conekta-language-lib
 * @returns {Object} Object {keyCountry:countryName} i.e. {mx:'Mexico'} for lang en
 */
const getAvailableCountries = (lang = 'en') => Object
  .keys(availableCountriesClass)
  .reduce(
    (map, cId) => ({
      ...map,
      [availableCountriesClass[cId].id]: availableCountriesClass[cId].getCountryName(lang),
    })
    , {});

/**
 * Return a class for a given country id
 * @param {*} countryId country id. IE mx, co, br, arg ...
 * @returns Country Class
 */
const getClassAddressByCountry = (countryId) => {
  const country = availableCountriesClass[countryId];
  if (!country) throw new Error(`Country ${countryId} is not available`);
  return country;
};


export {
  BaseAddress,
  MexicoAddress,
  // Do not forget export your custom Country Address
  // BrazilAddress,
  availableCountriesClass,
  getAvailableCountries,
  getClassAddressByCountry,
};
