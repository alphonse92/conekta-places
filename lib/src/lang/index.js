import en from './en';
import es from './es';

const langs = {
  en,
  es,
};

const makeLangSelector = (dic = langs, lang) => {
  if (!dic[lang]) throw new Error('LANG_NOT_FOUND');
  return str => dic[lang][str] || 'STRING_NOT_FOUND';
};

export {
  en,
  es,
  makeLangSelector,
};
