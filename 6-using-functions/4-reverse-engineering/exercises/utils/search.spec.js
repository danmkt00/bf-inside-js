import {searchText} from './search.js';

describe('searchText: is looking for some text in other text', () => {
  describe('the function behavior', () => {
    it('returns true when there is an empty string', () => {
      const returned = searchText('');
      expect(returned).toEqual(true);
    });
    it('returns true when there is one letter that you look for', () => {
      const returned = searchText('hello', 'h', true);
      expect(returned).toEqual(true);
    });
    it('returns false when there is one letter that is not in same register', () => {
      const returned = searchText('hello', 'H', true);
      expect(returned).toEqual(false);
    });
    it('returns true when there is one letter that is not in same register but with not case sensitive', () => {
      const returned = searchText('hello', 'H', false);
      expect(returned).toEqual(true);
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = searchText();
      expect(returned).toEqual(true);
    });
    it('has an empty string for the second param', () => {
      const returned = searchText('text');
      expect(returned).toEqual(true);
    });
    it('has a true for the third param', () => {
      const returned = searchText('text', 'Te');
      expect(returned).toEqual(false);
    });
 
  });
});
