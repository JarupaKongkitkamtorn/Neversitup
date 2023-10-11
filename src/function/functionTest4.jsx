export const handleLogicTest4 = (testValue) => {
  let result = [];
  let time = 0;
  if (testValue.length === 0) {
    return { result, time };
  }
  for (let i = 0; i < testValue.length; i++) {
    if (
      (testValue[i].includes(":") || testValue[i].includes(";")) &&
      (testValue[i].includes(")") || testValue[i].includes("D"))
    ) {
      time++;
      result.push(testValue[i]);
    }
  }
  return { result, time };
};
