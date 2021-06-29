import en from './en';
import es from './es';

const langs = {
  en,
  es,
};

const makeLangSelector = (dic = langs, lang) => {
  if (!dic[lang]) throw new Error('LANG_NOT_FOUND');
  return (str, def = 'STRING_NOT_FOUND') => dic[lang][str] || def;
};

export {
  en,
  es,
  makeLangSelector,
};
