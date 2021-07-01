import _get from 'lodash/get';
import * as yup from 'yup';
import { Dictionary } from 'conekta-language';

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

  static getCountryName(defaultSelectedLang = 'en') {
    const dictionary = new Dictionary(undefined, { defaultSelectedLang });
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
      pais: yup.string().required('INPUT_REQUIRED'),
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
      estado,
      // pais,
    } = this.segments;
    return `${estado}, ${municipio}, ${calle}: ${numExt} ${numInt ? `- ${numInt}` : ''}`;
  }
}
