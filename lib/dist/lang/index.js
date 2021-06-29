"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "en", {
  enumerable: true,
  get: function () {
    return _en.default;
  }
});
Object.defineProperty(exports, "es", {
  enumerable: true,
  get: function () {
    return _es.default;
  }
});
exports.makeLangSelector = void 0;

var _en = _interopRequireDefault(require("./en"));

var _es = _interopRequireDefault(require("./es"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const langs = {
  en: _en.default,
  es: _es.default
};

const makeLangSelector = (dic = langs, lang) => {
  if (!dic[lang]) throw new Error('LANG_NOT_FOUND');
  return (str, def = 'STRING_NOT_FOUND') => dic[lang][str] || def;
};

exports.makeLangSelector = makeLangSelector;