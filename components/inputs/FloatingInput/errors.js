export const filterCharacters = (str) => {
  const numStr = str.replace(/[^\d.-]/g, "");
  return Number(numStr);
};

export const sanitizeCharacters = (str) => {
  const cleanStr = str.replace(/[\s.;,?%0-9]/g, "");
  return cleanStr;
};

export const sanitizeTextArea = (str) => {
  const cleanStr = str.replace(/[\<\>']+/g, "");
  return cleanStr;
};
