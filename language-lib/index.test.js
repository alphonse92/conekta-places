import expect from 'expect';
import DefaultDictionaries from './dist/dictionary';
import { LangNotAvailable } from './dist/Errors/LangNotAvailable';
import { NoLangSelected } from './dist/Errors/NoLangSelected';
import { CONSTANTS, Dictionary } from './dist';

describe('Testing language module', () => {

  describe('Dictionary class', () => {

    it('Should raise an error because not lang was selected', () => {

      const dictionary = new Dictionary(DefaultDictionaries);

      try {
        dictionary.checkForLangSelected();
      } catch (e) {
        expect(e).toBeInstanceOf(NoLangSelected)
      }

      try {
        dictionary.getDictionaryStrings();
      } catch (e) {
        expect(e).toBeInstanceOf(NoLangSelected)
      }

      try {
        dictionary.getString();
      } catch (e) {
        expect(e).toBeInstanceOf(NoLangSelected)
      }
    })

    describe('Setting a language', () => {
      it('Should raise an error because we not passes down the lang', () => {
        const dictionary = new Dictionary(DefaultDictionaries);
        try {
          dictionary.setCurrentLanguage()
        } catch (e) {
          expect(e).toBeInstanceOf(NoLangSelected)
        }
      })
      it('Should raise an error because language not exists', () => {
        const dictionary = new Dictionary(DefaultDictionaries);
        try {
          dictionary.setCurrentLanguage('aaaa')
        } catch (e) {
          expect(e).toBeInstanceOf(LangNotAvailable)
        }
      })

      it('Should not raise exception if we selects a language which exists in the dictionary', () => {
        const dictionary = new Dictionary(DefaultDictionaries);
        dictionary.setCurrentLanguage('en');
        expect(dictionary.selectedDictName).toBe('en');
      })

      it('Should return the string language from the selected dict', () => {
        const dictionary = new Dictionary(DefaultDictionaries);
        dictionary.setCurrentLanguage('en');
        expect(dictionary.selectedDictName).toBe('en');

        const str = dictionary.getString('STR_SAVE');
        expect(str).toBe(DefaultDictionaries.en.STR_SAVE)
      })

      it('Should return the string in every language I selected', () => {
        const dictionary = new Dictionary(DefaultDictionaries);

        dictionary.setCurrentLanguage('en');
        expect(dictionary.selectedDictName).toBe('en');
        let str = dictionary.getString('STR_SAVE');
        expect(str).toBe(DefaultDictionaries.en.STR_SAVE)

        dictionary.setCurrentLanguage('es');
        expect(dictionary.selectedDictName).toBe('es');
        str = dictionary.getString('STR_SAVE');
        expect(str).toBe(DefaultDictionaries.es.STR_SAVE)
      })

      it('Should return the string another language if i specified it in the get string', () => {
        const dictionary = new Dictionary(DefaultDictionaries);

        dictionary.setCurrentLanguage('en');
        expect(dictionary.selectedDictName).toBe('en');

        const strEn = dictionary.getString('STR_SAVE');
        expect(strEn).toBe(DefaultDictionaries.en.STR_SAVE)

        const strEs = dictionary.getString('STR_SAVE', 'es')
        expect(strEs).toBe(DefaultDictionaries.es.STR_SAVE)


      })

      it('Should  raise an exception because language is not available when i call get string with the second parameter', () => {
        const dictionary = new Dictionary(DefaultDictionaries);

        dictionary.setCurrentLanguage('en');
        expect(dictionary.selectedDictName).toBe('en');

        const strEn = dictionary.getString('STR_SAVE');
        expect(strEn).toBe(DefaultDictionaries.en.STR_SAVE)

        try {
          dictionary.getString('STR_SAVE', 'aaa')
        } catch (e) {
          expect(e).toBeInstanceOf(LangNotAvailable)
        }
      })

      it('Should  return an default string if does not exist in dict', () => {
        const dictionary = new Dictionary(DefaultDictionaries);

        dictionary.setCurrentLanguage('en');
        expect(dictionary.selectedDictName).toBe('en');

        const strEn = dictionary.getString('AAAA');
        expect(strEn).toBe(CONSTANTS.DEFAULT)
      })
    })
  });
});
