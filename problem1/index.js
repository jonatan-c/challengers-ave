function multiplicationWithoutMultiplying(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x === 1) {
    return y;
  }
  if (y === 1) {
    return x;
  }

  return x / (1 / y);
}

const x = -5;
const y = -7;
const result = multiplicationWithoutMultiplying(x, y);
console.log(
  `The result of the multiplication between ${x} and ${y} is: ${result}`
);