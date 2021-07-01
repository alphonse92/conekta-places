import expect from 'expect';
import {
  Constants,
  Helpers,
  Schemas,
} from './index';

describe('Testing modules', () => {
  describe('Constants', () => {
    it('Should export Constant Module', () => {
      expect(Boolean(Constants)).toBe(true);
    });
    it('Should the module export Colors', () => {
      expect(Boolean(Constants.Colors)).toBe(true);
    });
  });

  describe('Helpers', () => {
    it('Should Helpers module to be exported', () => {
      expect(Boolean(Helpers)).toBe(true);
    });
    it('Should export the utility for address', () => {
      expect(Boolean(Helpers.Address)).toBe(true);
    });
    it('Should export the utility for Gmaps', () => {
      expect(Boolean(Helpers.Gmaps)).toBe(true);
    });
  });

  describe('Schemas', () => {
    it('Should Schemas be exported', () => {
      expect(Boolean(Schemas)).toBe(true);
    });
    it('Should export Models', () => {
      expect(Boolean(Schemas.Models)).toBe(true);
    });
    it('Should Models export validators', () => {
      expect(Boolean(Schemas.Models.Validators)).toBe(true);
    });
  });
});
