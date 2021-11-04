const groupArrayElements = (array, numberOfNewArrays) => {
  const sizeOfNewArrays = Math.ceil(array.length / numberOfNewArrays);
  return new Array(numberOfNewArrays).fill('').map((_, index) => {
    const startPoint = index * sizeOfNewArrays;
    return array.slice(startPoint, startPoint + sizeOfNewArrays);
  });
};

module.exports = { groupArrayElements };
