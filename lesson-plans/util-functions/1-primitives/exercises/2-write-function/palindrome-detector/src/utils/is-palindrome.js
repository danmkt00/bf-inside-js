/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
export const isPalindrome = (toCheck = ' ') => {
  for (let i = 0; i < toCheck.length / 2; i++) {
    if (toCheck[i] !== toCheck.at(-i - 1)) {
      return false;
    }
  }
  return true;
};
