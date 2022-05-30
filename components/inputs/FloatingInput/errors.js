export const filterCharacters = (str) => {
  const numStr = str.replace(/[^\d.-]/g, "");
  console.log(numStr);
  return Number(numStr);
};

export const sanitizeCharacters = (str) => {
  const cleanStr = str.replace(/[\s.;,?%0-9]/g, "");
  console.log(cleanStr);
  return cleanStr;
};
