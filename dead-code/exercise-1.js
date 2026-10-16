// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.

const greeting = "hello";
let testName = "Aman";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

console.log(sayHello(greeting, testName)); // 'hello, Aman!'
