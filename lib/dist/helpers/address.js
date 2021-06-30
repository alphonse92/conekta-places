"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractGoogleGeocodeComponents = void 0;

/**
 * This function proccess the google geocode results and returns a friendly and meanful object
 * @param {*} result google geocode result object
 * @returns {Object} a friendly and meanful object
 */
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