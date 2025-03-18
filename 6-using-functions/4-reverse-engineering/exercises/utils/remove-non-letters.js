export const removeNonLetters = (text = '') => {
  let result = '';
  let pattern = /^[a-zA-Z]$/;
  for(let i = 0; i < text.length; i++){
    if(pattern.test(text[i])){
      result+=text[i];
    }
  }

  return result;
};
