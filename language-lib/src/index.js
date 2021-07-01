import DefaultDictionaries from './dictionary';
import { NoLangSelected } from './Errors/NoLangSelected';
import { StringRequired } from './Errors/StringRequired';
import { LangNotAvailable } from './Errors/LangNotAvailable';
import { StringNotFound } from './Errors/StringNotFound';

export const CONSTANTS = {
  DEFAULT: 'STRING_NOT_FOUND'
};

export class Dictionary {

  // Use custom dictionaries if you want, by default
  // Using the current dictionary
  constructor(customDict = DefaultDictionaries, { defaultSelectedLang } = {}) {
    this.dictionary = customDict;
    this.selectedDictName = defaultSelectedLang;
    this.selectedDict = this.dictionary[defaultSelectedLang];
  }

  checkForLangSelected() {
    if (!this.selectedDict) throw new NoLangSelected();
  }

  setCurrentLanguage(lang) {
    if (!lang) throw new NoLangSelected();

    const langInDict = this.dictionary[lang];

    if (!langInDict) throw new LangNotAvailable(lang, this.getAvailableLanguages());

    this.selectedDict = langInDict;
    this.selectedDictName = lang;
  }

  getAvailableLanguages() {
    return Object.keys(this.dictionary);
  }

  getDictionaryStrings() {
    this.checkForLangSelected();
    return Object.keys(this.selectedDict);
  }

  getString(StringName, useDict) {
    this.checkForLangSelected()
    if (!StringName) throw new StringRequired();

    const dictName = useDict || this.selectedDictName;
    const dict = this.dictionary[dictName];

    if (!dict) throw new LangNotAvailable(useDict, this.getAvailableLanguages());

    const str = dict[StringName];

    if (!str) {
      const error = new StringNotFound(StringName, dictName)
      console.error(error);
    }

    return str || CONSTANTS.DEFAULT;
  }

}