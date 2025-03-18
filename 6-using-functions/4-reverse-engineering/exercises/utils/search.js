export const searchText = (text = '', toSearch = '', caseSensitive = true) => {
  if (caseSensitive) {
    return text.includes(toSearch);
  } else {
    return text.toLowerCase().includes(toSearch.toLowerCase());
  }
};
