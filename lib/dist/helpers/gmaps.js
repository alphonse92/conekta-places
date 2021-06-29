"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlaceDetails = exports.findPlacesFromQuery = exports.getPlacesService = void 0;

/**
 *
 * This module export some util function to handle google places service.
 *
 * I can use other npm library for this but I want to show how import google services
 * built-in functions from scratch without external helpers
 *
 */

/**
 * Return google places service object
 * docs: https://developers.google.com/maps/documentation/javascript/places
 * @param {*} key Google api key
 * @returns {GooglePlaceService} Google Service
 */
const getPlacesService = key => new Promise((resolve, reject) => {
  try {
    const {
      googlePlaceService
    } = window;

    if (!googlePlaceService) {
      const encodedKey = encodeURIComponent(key);
      const url = `https://maps.googleapis.com/maps/api/js?key=${encodedKey}&libraries=places`;
      const script = document.createElement('script');
      script.src = url;
      script.id = 'googlePlaceService';
      document.body.appendChild(script);

      script.onload = () => {
        // eslint-disable-next-line no-undef
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        window.googlePlaceService = service;
        resolve(service);
      };
    } else {
      resolve(googlePlaceService);
    }
  } catch (e) {
    reject(e);
  }
});

exports.getPlacesService = getPlacesService;

const findPlacesFromQuery = (key, query) => new Promise((resolve, reject) => {
  const callback = (result, status) => {
    if (status.toLowerCase() === 'ok') {
      resolve(result);
    } else if (status.toLowerCase() === 'zero_results') {
      resolve([]);
    } else {
      reject(new Error(`Something went wrong when fetching for places. Status: ${status}`));
    }
  };

  const request = {
    query,
    fields: ['ALL']
  };

  const handleServicePromise = service => {
    service.findPlaceFromQuery(request, callback);
  };

  return getPlacesService(key).then(handleServicePromise).catch(reject);
});

exports.findPlacesFromQuery = findPlacesFromQuery;

const getPlaceDetails = (key, placeId) => new Promise((resolve, reject) => {
  const callback = (place, status) => {
    if (status.toLowerCase() === 'ok') {
      resolve(place);
    } else {
      reject(new Error(`Something went wrong when fetching for places. Status: ${status}`));
    }
  };

  const request = {
    placeId,
    fields: ['ALL']
  };

  const handleServicePromise = service => {
    service.getDetails(request, callback);
  };

  return getPlacesService(key).then(handleServicePromise).catch(reject);
});

exports.getPlaceDetails = getPlaceDetails;