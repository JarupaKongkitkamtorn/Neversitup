export const handleLogicTest3 = (testValue) => {
  if (testValue.length === 1) {
    return { number: testValue[0], time: 1 };
  }
  let numArray = [];
  for (let i = 0; i < testValue.length; i++) {
    if (numArray.length === 0) {
      numArray.push({
        num: testValue[i],
        count: testValue.filter((item) => item === testValue[i]).length,
      });
    } else {
      if (!numArray.find((item) => item.num === testValue[i])) {
        numArray.push({
          num: testValue[i],
          count: testValue.filter((item) => item === testValue[i]).length,
        });
      }
    }
  }
  const result = numArray.find((item) => item.count % 2 !== 0);
  return { number: result.num, time: result.count };
};
