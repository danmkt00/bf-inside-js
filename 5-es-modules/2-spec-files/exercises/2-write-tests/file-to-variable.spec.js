// #todo

import { fileToVariable } from './file-to-variable.js';

describe('Change file name to Kamel casing variable', () => {
  describe('how the function change file names to variable', () => {
    it('file-to-variable.js should return fileToVariable', () => {
      const expected = 'fileToVariable';
      const returned = fileToVariable('file-to-variable.js');
      expect(returned).toEqual(expected);
    });
    it('do-magic.js should return doMagic', () => {
      const expected = 'doMagic';
      const returned = fileToVariable('do-magic.js');
      expect(returned).toEqual(expected);
    });
  });
  describe('the default parameters', () => {
    it("rerturn ''  when value is not passed", () => {
      const expected = '';
      const returned = fileToVariable('');
      expect(returned).toEqual(expected);
    });
  });
});
