import {repeatEach} from './repeat-each.js';

describe('remove: is removing duplicate characters', () => {
  describe('the function behavior', () => {
    it('does nothing to an empty string', () => {
      const returned = repeatEach('');
      expect(returned).toEqual('');
    });
    it('repeats one letter', () => {
      const returned = repeatEach('h');
      expect(returned).toEqual('hh');
    });
    it('repeats many letters', () => {
      const returned = repeatEach('hello');
      expect(returned).toEqual('hheelllloo');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = repeatEach();
      expect(returned).toEqual('');
    });
 
  });
});
