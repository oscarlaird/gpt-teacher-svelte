function calculateSumOfScores(activities) {
  let sum = 0;
  for (let activity of activities) {
    sum += activity.score;
  }
  return sum;
}

// Generate an array of 10,000 activity objects with random scores
const activities = Array.from({ length: 10000000 }, () => ({
  score: Math.floor(Math.random() * 100),
}));

// Measure the time taken to calculate the sum of scores
const startTime = performance.now();
const sum = calculateSumOfScores(activities);
const endTime = performance.now();

console.log(`Sum of scores: ${sum}`);
console.log(`Time taken: ${endTime - startTime} ms`);

