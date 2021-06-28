import _get from 'lodash/get';

/**
 * This function returns a object which represents mexico address.
 * @param {*} components Address components, take a look on extractGoogleGeocodeComponents functions
 * @returns {Object} object with mexico address information
 */
export const extractMexicoSegmentsFromComponents = (components) => ({
  calle: _get(components, 'route.name', ''),
  numExt: '',
  numInt: '',
  codigoPostal: _get(components, 'postalCode', ''),
  colonia: _get(components, 'sublocality.name', ''),
  municipio: _get(components, 'locality.name', ''),
  ciudad: _get(components, 'locality.name', ''),
  estado: _get(components, 'state.name', ''),
  pais: _get(components, 'country.name', ''),
  countryId: _get(components, 'country.id', '').toLowerCase(),
});

// Example of custom country extractors
export const extractArgentinaSegmentsFromComponents = () => ({});
export const extractBrazilSegmentsFromComponents = () => ({});

export const getCountrySegmentsExtrator = (countryId) => ({
  mx: extractMexicoSegmentsFromComponents,
  // Example of how to support multiples country extractors
  ar: extractArgentinaSegmentsFromComponents,
  br: extractBrazilSegmentsFromComponents,
}[countryId]);

/**
 * This function proccess the google geocode results and returns a friendly and meanful object
 * @param {*} result google geocode result object
 * @returns {Object} a friendly and meanful object
 */
export const extractGoogleGeocodeComponents = (result) => {
  const {
    address_components: components = [],
    formatted_address: formattedAddress,
    geometry,
  } = result;

  return components.reduce((acc, comp) => {
    const {
      types: typesList = [],
      long_name: longName,
      short_name: shortName,
    } = comp;

    const types = typesList.reduce((tAcc, t) => ({ ...tAcc, [t]: true }), {});

    const componentsObj = { ...acc };

    // It may be iterated but it's more reable in this way
    if (types.country) {
      componentsObj.country = {
        id: shortName,
        name: longName,
      };
    } else if (types.administrative_area_level_2) {
      componentsObj.city = {
        id: shortName,
        name: longName,
      };
    } else if (types.administrative_area_level_1) {
      componentsObj.state = {
        id: shortName,
        name: longName,
      };
    } else if (types.neighborhood) {
      componentsObj.neighborhood = {
        id: shortName,
        name: longName,
      };
    } else if (types.route) {
      componentsObj.route = {
        id: shortName,
        name: longName,
      };
    } else if (types.locality) {
      componentsObj.locality = {
        id: shortName,
        name: longName,
      };
    } else if (types.sublocality) {
      componentsObj.sublocality = {
        id: shortName,
        name: longName,
      };
    } else if (types.postal_code) {
      componentsObj.postalCode = longName;
    } else if (types.street_number) {
      componentsObj.street_number = longName;
    }

    return componentsObj;
  }, {
    formattedAddress,
    geometry,
  });
};
