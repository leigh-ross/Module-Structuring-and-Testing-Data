export function countChar(stringOfCharacters, findCharacter) {
  const occurrences = stringOfCharacters.split(findCharacter);
  return occurrences.length - 1
}
