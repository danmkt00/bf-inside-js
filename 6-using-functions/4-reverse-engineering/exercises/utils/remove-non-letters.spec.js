import {removeNonLetters} from './remove-non-letters.js';

describe('function: is removing non letters', () => {
  describe('the function behavior', () => {
    it('does nothing to an empty string', () => {
      const returned = removeNonLetters('');
      expect(returned).toEqual('');
    });
    it('removes one non letter', () => {
      const returned = removeNonLetters('hel#lo');
      expect(returned).toEqual('hello');
    });
    it('removes many none letters', () => {
      const returned = removeNonLetters('h##ello wor#$%ld425');
      expect(returned).toEqual('helloworld');
    });
    it('removes last none letter', () => {
      const returned = removeNonLetters('hello-');
      expect(returned).toEqual('hello');
    });
    it('removes first none letter', () => {
      const returned = removeNonLetters('-hello');
      expect(returned).toEqual('hello');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = removeNonLetters();
      expect(returned).toEqual('');
    });
 
  });
});
