// Declare the test number
let num = 5;

// Define the core calculation engine
function factorialCalculator(inputNum) {
  let result = 1;

  for (let i = 1; i <= inputNum; i++) {
    result = result * i;
  }

  return result;
}

// Execute the logic and format the output
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

// Output to console
console.log(resultMsg);
