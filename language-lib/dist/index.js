"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dictionary = exports.CONSTANTS = void 0;

var _dictionary = _interopRequireDefault(require("./dictionary"));

var _NoLangSelected = require("./Errors/NoLangSelected");

var _StringRequired = require("./Errors/StringRequired");

var _LangNotAvailable = require("./Errors/LangNotAvailable");

var _StringNotFound = require("./Errors/StringNotFound");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CONSTANTS = {
  DEFAULT: 'STRING_NOT_FOUND'
};
exports.CONSTANTS = CONSTANTS;

class Dictionary {
  // Use custom dictionaries if you want, by default
  // Using the current dictionary
  constructor(customDict = _dictionary.default, {
    defaultSelectedLang
  } = {}) {
    _defineProperty(this, "getDictionaryStrings", () => {
      this.checkForLangSelected();
      return Object.keys(this.selectedDict);
    });

    this.dictionary = customDict;
    this.selectedDictName = defaultSelectedLang;
    this.selectedDict = this.dictionary[defaultSelectedLang];
  }

  checkForLangSelected() {
    if (!this.selectedDict) throw new _NoLangSelected.NoLangSelected();
  }

  setCurrentLanguage(lang) {
    if (!lang) throw new _NoLangSelected.NoLangSelected();
    const langInDict = this.dictionary[lang];
    if (!langInDict) throw new _LangNotAvailable.LangNotAvailable(lang, this.getAvailableLanguages());
    this.selectedDict = langInDict;
    this.selectedDictName = lang;
  }

  getAvailableLanguages() {
    return Object.keys(this.dictionary);
  }

  getString(StringName, useDict) {
    this.checkForLangSelected();
    if (!StringName) throw new _StringRequired.StringRequired();
    const dictName = useDict || this.selectedDictName;
    const dict = this.dictionary[dictName];
    if (!dict) throw new _LangNotAvailable.LangNotAvailable(useDict, this.getAvailableLanguages());
    const str = dict[StringName];

    if (!str) {
      const error = new _StringNotFound.StringNotFound(StringName, dictName);
      console.error(error);
    }

    return str || CONSTANTS.DEFAULT;
  }

}

exports.Dictionary = Dictionary;