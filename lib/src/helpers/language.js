import * as Lang from './../lang';

export const getAvailableLangDict = () => {
  const { es, en } = Lang;
  const dict = { es, en };
  return dict;
};

export const getLanguageSelector = (lang = 'en') => {
  const dict = getAvailableLangDict();
  return Lang.makeLangSelector(dict, lang);
};
