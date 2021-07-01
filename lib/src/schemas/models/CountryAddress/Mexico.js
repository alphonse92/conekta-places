import _get from 'lodash/get';
import { Dictionary } from 'conekta-language';
import validator from '../validators/mexico';
import { BaseAddress } from './Base';

export class MexicoAddress extends BaseAddress {

  static getSegmentNames() {
    return Object.keys(MexicoAddress.getSegmentsFromComponents());
  }

  static createInstanceFromComponents(components) {
    return new MexicoAddress(MexicoAddress.getSegmentsFromComponents(components));
  }

  static getSegmentsFromComponents(components = {}) {
    return {
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
    };
  }

  static get id() {
    return 'mx';
  }

  static getCountryName(defaultSelectedLang = 'en') {
    const dictionary = new Dictionary(undefined, { defaultSelectedLang });
    return dictionary.getString('COUNTRY_MX');
  }

  getPostalCode() {
    return this.segments.codigoPostal;
  }

  getValidator() {
    return validator;
  }

  validate() {
    return validator.validate(this.segments);
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
      estado,
      // pais,
    } = this.segments;
    return `${estado}, ${municipio}, ${calle}: ${numExt} ${numInt ? `- ${numInt}` : ''}`;
  }
}
