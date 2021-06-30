"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexicoAddress = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _language = require("../../../helpers/language");

var _mexico = _interopRequireDefault(require("../validators/mexico"));

var _Base = require("./Base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MexicoAddress extends _Base.BaseAddress {
  static getSegmentNames() {
    return Object.keys(MexicoAddress.getSegmentsFromComponents());
  }

  static createInstanceFromComponents(components) {
    return new MexicoAddress(MexicoAddress.getSegmentsFromComponents(components));
  }

  static getSegmentsFromComponents(components = {}) {
    return {
      calle: (0, _get2.default)(components, 'route.name', ''),
      numExt: '',
      numInt: '',
      codigoPostal: (0, _get2.default)(components, 'postalCode', ''),
      colonia: (0, _get2.default)(components, 'sublocality.name', ''),
      municipio: (0, _get2.default)(components, 'locality.name', ''),
      ciudad: (0, _get2.default)(components, 'locality.name', ''),
      estado: (0, _get2.default)(components, 'state.name', ''),
      pais: (0, _get2.default)(components, 'country.name', ''),
      countryId: (0, _get2.default)(components, 'country.id', '').toLowerCase()
    };
  }

  static get id() {
    return 'mx';
  }

  static getCountryName(lang = 'en') {
    const getString = (0, _language.getLanguageSelector)(lang);
    return getString('COUNTRY_MX');
  }

  getPostalCode() {
    return this.segments.codigoPostal;
  }

  getValidator() {
    return _mexico.default;
  }

  validate() {
    return _mexico.default.validate(this.segments);
  }

  toString() {
    const {
      calle,
      numExt,
      numInt,
      // codigoPostal,
      // colonia,
      municipio,
      // ciudad,
      estado // pais,

    } = this.segments;
    return `${estado}, ${municipio}, ${calle}: ${numExt} ${numInt ? `- ${numInt}` : ''}`;
  }

}

exports.MexicoAddress = MexicoAddress;