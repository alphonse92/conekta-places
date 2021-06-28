import expect from 'expect';
import {
  Constants,
  Helpers,
  Lang,
  Schemas,
} from './index'

console.log(Schemas)

describe('Testing modules', function () {
  describe('Constants', function () {
    it('Should export Constant Module', () => {
      expect(Boolean(Constants)).toBe(true)
    })
    it('Should the module export Colors', function () {

      expect(Boolean(Constants.Colors)).toBe(true)
    });
  });

  describe('Helpers', function () {
    it('Should Helpers module to be exported', () => {
      expect(Boolean(Helpers)).toBe(true)
    })
    it('Should export the utility for address', function () {
      expect(Boolean(Helpers.Address)).toBe(true)
    });
    it('Should export the utility for Gmaps', function () {
      expect(Boolean(Helpers.Gmaps)).toBe(true)
    });
  });

  describe('Lang', function () {
    it('Should Lang module to be exported', () => {
      expect(Boolean(Lang)).toBe(true)
    })
    it('Should export the ES lang', function () {
      expect(Boolean(Lang.es)).toBe(true)
    });
    it('Should export the EN lang', function () {
      expect(Boolean(Lang.en)).toBe(true)
    });
    it('Should export the default lang value', function () {
      expect(Boolean(Lang.DEFAULT)).toBe(true)
    });
  });

  describe('Schemas', function () {
    it('Should Schemas be exported', () => {
      expect(Boolean(Schemas)).toBe(true)
    })
    it('Should export Models', function () {
      expect(Boolean(Schemas.Models)).toBe(true)
    });
    it('Should Models export validators', function () {
      expect(Boolean(Schemas.Models.Validators)).toBe(true)
    });
  });
});