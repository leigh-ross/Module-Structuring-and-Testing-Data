function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

const cart = [10, 20, 30];
const result = calculateTotal(cart);
console.log("Total:", result);
console.log("Expected:", 60);
