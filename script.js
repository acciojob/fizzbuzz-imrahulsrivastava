let fizzbuzz = (start, end) => {
  // Write your code here

  let result = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result.join("\n");
};

// Do not change the code below

const start = prompt("Enter the starting number - ");
const end = prompt("Enter the ending number - ");
alert(fizzbuzz(parseInt(start), parseInt(end)));
