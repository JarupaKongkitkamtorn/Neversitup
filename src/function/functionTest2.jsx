export const handleLogicTest2 = (testValue) => {
  let results = [];
  if (testValue.length < 2) {
    results.push(testValue);
    return results;
  }
  for (let i = 0; i < testValue.length; i++) {
    let char = testValue[i];
    let subChar = testValue.substring(0, i) + testValue.substring(i + 1);
    let permutations = handleLogicTest2(subChar);
    for (let j = 0; j < permutations.length; j++) {
      results.push(char + permutations[j]);
    }
  }
  return results;
};

export const factorial = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
