// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.
// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.

describe("Multiple occurrences", () => {
  test("5 'a's in 'aaaaa'", () => {
    expect(countChar("aaaaa", "a")).toBe(5);
  });
  test("2 'l's in 'hello'", () => {
    expect(countChar("hello", "l")).toBe(2);
  });
  test("4 's's in 'mississippi'", () => {
    expect(countChar("mississippi", "s")).toBe(4);
  });
});

describe("No occurrences", () => {
  test("returns 0 for no occurrences", () => {
    expect(countChar("hello", "z")).toBe(0);
  });
  test("returns 0 for empty string", () => {
    expect(countChar("", "a")).toBe(0);
  });
});

describe("Edge cases", () => {
  test("counts when character is at the start", () => {
    expect(countChar("aabc", "a")).toBe(2);
  });
  test("counts when character is at the end", () => {
    expect(countChar("abca", "a")).toBe(2);
  });
  test("counts when character is the whole string", () => {
    expect(countChar("aaa", "a")).toBe(3);
  });
  test("case-sensitive", () => {
    expect(countChar("AaA", "A")).toBe(2);
  });
  test("handles a space character", () => {
    expect(countChar("a b c", " ")).toBe(2);
  });
});