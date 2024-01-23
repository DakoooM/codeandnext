/**
 * @param {string} str chaine de caractères
 * @param {number} index nombre de la chaine de caractère ou l'on doit modifier le caractère qu'on souhaite
 * @param {string} char Caractère a remplacer
 * @returns {string} chaine de caractère modifier
*/
export const replaceStringAt = (str, index, char, checkIf = undefined) => {
  if (index > str.length - 1) return str;

  return str.substring(0, index) + char + str.substring(index + 1);
}

/**
 * @param {string} string Chaine de caractères a transformer en slug d'url (tutoriels/:slugId)
*/
export const slugify = (string) => {
  let wihoutSpace = string.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
  
  return wihoutSpace;
}

export const isNull = (value) => {
  const isNul = value === null || value === undefined || value === "" || 
    value === false || typeof value === "undefined" || value === -1;

  return isNul;
}