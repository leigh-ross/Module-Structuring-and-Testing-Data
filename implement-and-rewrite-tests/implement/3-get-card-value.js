/* 
This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

Implement a function getCardValue, when given a string representing a playing card,
should return the numerical value of the card.
A valid card string will contain a rank followed by the suit.
The rank can be one of the following strings:
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
The suit can be one of the following emojis:
  "♠", "♥", "♦", "♣"
For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".
When the card is an ace ("A"), the function should return 11.
When the card is a face card ("J", "Q", "K"), the function should return 10.
When the card is a number card ("2" to "10"), the function should return its numeric value.
When the card string is invalid (not following the above format), the function should
throw an error.
Acceptance criteria:
After you have implemented the function, write tests to cover all the cases, and
execute the code to ensure all tests pass.
*/

export function getCardValue(card) {
  const cardValue = card.slice(0,-1);
  const cardSuit = card.slice(-1);
  const validSuits = ["♠", "♥", "♦", "♣"];
  const validNumberCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10"]
  const validFaceCards = ["A", "K", "Q", "J"];
  const cardValueNumber = Number(cardValue)
  if (!validNumberCards.includes(cardValue) && !validFaceCards.includes(cardValue)){
    throw new Error(`Expected a number followed by a suit, but got "${card}"`);
  } else if (!validSuits.includes(cardSuit)) {
    throw new Error(`Expected card suit to be: "♠", "♥", "♦", "♣" but got "${card}"`);
  }
    if (cardValue === "A") {
      return 11;
    } else if (validFaceCards.includes(cardValue)) {
      return 10;
    } else {
      return cardValueNumber;
    }
  }
