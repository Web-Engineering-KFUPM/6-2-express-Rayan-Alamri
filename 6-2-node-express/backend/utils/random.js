// ===============================================================
// TODO 2: Create a function that returns a random integer (in backend/utils/random.js)
// ===============================================================
// Goal:
//   Write a function named getRandomInt(max) that returns a random integer between 0 and (max - 1).

// Hints:
// - Use Math.random() → it generates a random decimal between 0 and 1.
// - Multiply it by 'max' to scale it to your desired range.
// - Use Math.floor() to round it down to the nearest whole number.
// - Finally, export this function using ES module syntax:
//     export function getRandomInt(max) { ... }

// Example:
//   getRandomInt(5) → could return 0, 1, 2, 3, or 4

// This function will be used later in quotes.js to select a random quote from the array.

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
  
}