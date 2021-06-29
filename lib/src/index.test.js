import expect from 'expect';
import {
  Constants,
  Helpers,
  Lang,
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
    it('Should export the language module', () => {
      expect(Boolean(Helpers.Language)).toBe(true);
    });
  });

  describe('Lang', () => {
    it('Should Lang module to be exported', () => {
      expect(Boolean(Lang)).toBe(true);
    });
    it('Should export the ES lang', () => {
      expect(Boolean(Lang.es)).toBe(true);
    });
    it('Should export the EN lang', () => {
      expect(Boolean(Lang.en)).toBe(true);
    });
    it('Should export the makeLangSelector function', () => {
      expect(Boolean(Lang.makeLangSelector)).toBe(true);
    });
    it('Should create string selector', () => {
      const { makeLangSelector, ...langs } = Lang;
      makeLangSelector(langs, 'es');
      makeLangSelector(langs, 'en');
    });
    it('Should languages have the same amount of keys', () => {
      const dict = Object.keys(Lang).filter(x => x !== 'makeLangSelector');
      let totalOfKeys;
      for (const id of Object.keys(dict)) {
        const lang = dict[id];
        const currentKeysLenght = Object.keys(lang).length;
        if (totalOfKeys === undefined) {
          totalOfKeys = currentKeysLenght;
        } else {
          expect(totalOfKeys).toBe(currentKeysLenght);
        }
      }
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
