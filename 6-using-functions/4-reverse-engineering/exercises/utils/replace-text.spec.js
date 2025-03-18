import {replaceText} from './replace-text.js';

describe('replaceText: is replacing some text with other', () => {
  describe('the function behavior', () => {
    it('does nothing to an empty string', () => {
      const returned = replaceText('');
      expect(returned).toEqual('');
    });
    it('replaces one letter', () => {
      const returned = replaceText('wello', 'w', 'h');
      expect(returned).toEqual('hello');
    });
    it('replaces many letters', () => {
      const returned = replaceText('hewwo', 'w', 'l');
      expect(returned).toEqual('hello');
    });
    it('replaces big texts', () => {
      const returned = replaceText('hello world! world!', 'world', 'everyone');
      expect(returned).toEqual('hello everyone! everyone!');
    });
    it("isn't replacing wnen no matches", () => {
      const returned = replaceText('hello world! world!', 'daniel', 'everyone');
      expect(returned).toEqual('hello world! world!');
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default param', () => {
      const returned = replaceText();
      expect(returned).toEqual('');
    });
    it('has an empty string for the second param', () => {
      const returned = replaceText();
      expect(returned).toEqual('');
    });
    it('has an empty string for the third param', () => {
      const returned = replaceText();
      expect(returned).toEqual('');
    });
 
  });
});
