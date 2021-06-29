import { getLanguageSelector } from './language';

export const getAvailableCountries = (lang = 'en') => {
  const getString = getLanguageSelector(lang);
  return {
    mx: getString('COUNTRY_MX'),
  };
};
