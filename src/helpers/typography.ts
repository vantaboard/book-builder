export const TitleCase = (str: string) => {
  return str.replace(/(^|\s)[a-z]/g, (_: string) => _.toUpperCase());
};
