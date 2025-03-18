export const replaceText = (paragraph = '', toReplace = '' , toReplaceWith = '') => {
  const regex = new RegExp(toReplace, 'g'); 
  return paragraph.replace(regex, toReplaceWith);
};
