"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractGoogleGeocodeComponents = exports.getCountrySegmentsExtrator = exports.extractBrazilSegmentsFromComponents = exports.extractArgentinaSegmentsFromComponents = exports.extractMexicoSegmentsFromComponents = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function returns a object which represents mexico address.
 * @param {*} components Address components, take a look on extractGoogleGeocodeComponents functions
 * @returns {Object} object with mexico address information
 */
const extractMexicoSegmentsFromComponents = components => ({
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
}); // Example of custom country extractors


exports.extractMexicoSegmentsFromComponents = extractMexicoSegmentsFromComponents;

const extractArgentinaSegmentsFromComponents = () => ({});

exports.extractArgentinaSegmentsFromComponents = extractArgentinaSegmentsFromComponents;

const extractBrazilSegmentsFromComponents = () => ({});

exports.extractBrazilSegmentsFromComponents = extractBrazilSegmentsFromComponents;

const getCountrySegmentsExtrator = countryId => ({
  mx: extractMexicoSegmentsFromComponents,
  // Example of how to support multiples country extractors
  ar: extractArgentinaSegmentsFromComponents,
  br: extractBrazilSegmentsFromComponents
})[countryId];
/**
 * This function proccess the google geocode results and returns a friendly and meanful object
 * @param {*} result google geocode result object
 * @returns {Object} a friendly and meanful object
 */


exports.getCountrySegmentsExtrator = getCountrySegmentsExtrator;

const extractGoogleGeocodeComponents = result => {
  const {
    address_components: components = [],
    formatted_address: formattedAddress,
    geometry
  } = result;
  return components.reduce((acc, comp) => {
    const {
      types: typesList = [],
      long_name: longName,
      short_name: shortName
    } = comp;
    const types = typesList.reduce((tAcc, t) => ({ ...tAcc,
      [t]: true
    }), {});
    const componentsObj = { ...acc
    }; // It may be iterated but it's more reable in this way

    if (types.country) {
      componentsObj.country = {
        id: shortName,
        name: longName
      };
    } else if (types.administrative_area_level_2) {
      componentsObj.city = {
        id: shortName,
        name: longName
      };
    } else if (types.administrative_area_level_1) {
      componentsObj.state = {
        id: shortName,
        name: longName
      };
    } else if (types.neighborhood) {
      componentsObj.neighborhood = {
        id: shortName,
        name: longName
      };
    } else if (types.route) {
      componentsObj.route = {
        id: shortName,
        name: longName
      };
    } else if (types.locality) {
      componentsObj.locality = {
        id: shortName,
        name: longName
      };
    } else if (types.sublocality) {
      componentsObj.sublocality = {
        id: shortName,
        name: longName
      };
    } else if (types.postal_code) {
      componentsObj.postalCode = longName;
    } else if (types.street_number) {
      componentsObj.street_number = longName;
    }

    return componentsObj;
  }, {
    formattedAddress,
    geometry
  });
};

exports.extractGoogleGeocodeComponents = extractGoogleGeocodeComponents;