import { Lang } from 'conekta-places-lib';

export const createLanguageSelector = (selectedLang) => {
  const { makeLangSelector, es, en } = Lang;
  const dict = { es, en };
  const getString = makeLangSelector(dict, selectedLang);
  return getString;
};
