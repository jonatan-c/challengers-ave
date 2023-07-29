function analyzeArray(numbers) {
  const totalElements = numbers.length;

  let evenCount = 0;
  let oddCount = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const percentageEven = ((evenCount / totalElements) * 100).toFixed() + "%";
  const percentageOdd = ((oddCount / totalElements) * 100).toFixed() + "%";

  let countGreaterThan1000 = 0;
  for (const number of numbers) {
    if (number > 1000) {
      countGreaterThan1000++;
    }
  }

  const percentageGreaterThan1000 =
    ((countGreaterThan1000 / totalElements) * 100).toFixed() + "%";

  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);

  const percentageOfMinToMax = ((minNumber / maxNumber) * 100).toFixed() + "%";

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / totalElements;

  const percentageOfAverageToMax =
    ((average / maxNumber) * 100).toFixed() + "%";

  const analysis = {
    totalElements,
    percentageEven,
    percentageOdd,
    percentageGreaterThan1000,
    minNumber,
    maxNumber,
    percentageOfMinToMax,
    percentageOfAverageToMax,
  };

  return analysis;
}

const numbersArray = [45, 1020, 750, 30, 1789, 2050, 420];
const result = analyzeArray(numbersArray);
console.log(result);
