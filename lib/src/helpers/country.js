import { MexicoAddress } from '../schemas/models/CountryAddress/Mexico';

export const availableCountriesClass = {
  mx: MexicoAddress,
};

export const getAvailableCountries = (lang = 'en') => Object
  .keys(availableCountriesClass)
  .reduce(
    (map, cId) => ({
      ...map,
      [availableCountriesClass[cId].id]: availableCountriesClass[cId].getCountryName(lang),
    })
    , {});


export const getClassAddressByCountry = (countryId) => {
  const country = availableCountriesClass[countryId];
  if (!country) throw new Error(`Country ${countryId} is not available`);
  return country;
};
