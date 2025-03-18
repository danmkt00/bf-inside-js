import {removeDuplicates} from './remove.js';

describe('remove: is removing duplicate characters', () => {
  describe('the function behavior', () => {
    it('does nothing to an empty string', () => {
      const returned = removeDuplicates('');
      expect(returned).toEqual('');
    });
    it('removes one repeated letter', () => {
      const returned = removeDuplicates('hello');
      expect(returned).toEqual('helo');
    });
    it('removes many of a characters', () => {
      const returned = removeDuplicates('hello worllld');
      expect(returned).toEqual('helo world');
    });
    it('removes last character', () => {
      const returned = removeDuplicates('heloo');
      expect(returned).toEqual('helo');
    });
    it('removes first character', () => {
      const returned = removeDuplicates('hhelo');
      expect(returned).toEqual('helo');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = removeDuplicates();
      expect(returned).toEqual('');
    });
 
  });
});
