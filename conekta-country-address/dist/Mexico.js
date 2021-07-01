"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexicoAddress = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var yup = _interopRequireWildcard(require("yup"));

var _conektaLanguage = require("conekta-language");

var _Base = require("./Base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  static getCountryName(defaultSelectedLang = 'en') {
    const dictionary = new _conektaLanguage.Dictionary(undefined, {
      defaultSelectedLang
    });
    return dictionary.getString('COUNTRY_MX');
  }

  static get id() {
    return 'mx';
  }

  getPostalCode() {
    return this.segments.codigoPostal;
  }

  static getValidator() {
    return yup.object().shape({
      calle: yup.string().required('INPUT_REQUIRED'),
      numExt: yup.string().required('INPUT_REQUIRED'),
      numInt: yup.string(),
      codigoPostal: yup.string().required('INPUT_REQUIRED'),
      colonia: yup.string().required('INPUT_REQUIRED'),
      municipio: yup.string().required('INPUT_REQUIRED'),
      ciudad: yup.string().required('INPUT_REQUIRED'),
      estado: yup.string().required('INPUT_REQUIRED'),
      pais: yup.string().required('INPUT_REQUIRED')
    });
  }

  validate() {
    return MexicoAddress.getValidator().validate(this.segments);
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