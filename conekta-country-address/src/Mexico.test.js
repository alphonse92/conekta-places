import expect from 'expect';

import { MexicoAddress } from './index';

const validSegments = {
  calle: 'Avenida Nuevo León',
  numExt: 'as',
  numInt: '',
  codigoPostal: '06100',
  colonia: 'Hipódromo',
  municipio: 'Ciudad de México',
  ciudad: 'Ciudad de México',
  estado: 'Ciudad de México',
  pais: 'México',
  countryId: 'mx',
};

describe('Testing Mexico Address', () => {
  it('Should return mexico address segments from google geocode components', () => {
    expect(MexicoAddress.getSegmentsFromComponents({})).toBeTruthy();
  });

  it('Should return a list of available segments', () => {
    expect(MexicoAddress.getSegmentNames({})).toBeTruthy();
    expect(MexicoAddress.getSegmentNames({})).toBeInstanceOf(Array);
  });

  it('Should create an instance of mexico address from google geocode components', () => {
    expect(MexicoAddress.createInstanceFromComponents({})).toBeTruthy();
    expect(MexicoAddress.createInstanceFromComponents({})).toBeInstanceOf(MexicoAddress);
  });

  it('Should create an instance of mexico address from google geocode components', () => {
    expect(MexicoAddress.createInstanceFromComponents({})).toBeTruthy();
    expect(MexicoAddress.createInstanceFromComponents({})).toBeInstanceOf(MexicoAddress);
  });

  it('Should create an instance of mexico for a given segments', () => {
    const mexicoAddress = new MexicoAddress(validSegments);
    expect(mexicoAddress).toBeTruthy();
    expect(mexicoAddress).toBeInstanceOf(MexicoAddress);
    expect(mexicoAddress.segments).toStrictEqual(validSegments);
  });

  it('Should create an instance of mexico for a given segments and be valid for a valid segments', () => {
    const mexicoAddress = new MexicoAddress(validSegments);
    expect(mexicoAddress.validate()).toBeTruthy();
  });

  it('Should validate raise an exception if segments are invalid', () => {
    const mexicoAddress = new MexicoAddress({});
    try {
      mexicoAddress.validate();
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it('Should  MexicoAddress returns a validator to validate addresses out of context', () => {
    const validator = MexicoAddress.getValidator();
    validator.validate(validSegments);
    try {
      validator.validate({});
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});
