import React, { useState, useEffect } from "react";
import { inputValueTest2 } from "../const/inputValue";
import { handleLogicTest2 } from "../function/functionTest2";

function test2() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    let resultValue = inputValueTest2.map((item) => ({
      testValue: item,
      results: JSON.stringify(handleLogicTest2(item)),
    }));
    setValue(resultValue);
  }, []);

  return (
    <div className="test">
      <div className="divQ">
        <div className="header">Test 2</div>
        <div className="question">
          Show coding logic and unit test <b>Permutations</b> (Choose your the
          most skilled)
        </div>
        <div className="question">
          your task is to create all permutations of a non-empty input string
          and remove duplicates, if present.
        </div>
        <div className="question">
          Create as many "<b>shufflings</b>" as you can!
        </div>
      </div>
      <div className="header-result">Result</div>
      {value.length !== 0 &&
        value.map((item, id) => (
          <div className="result" key={id}>
            <div>
              With input <b>{item.testValue}</b>:
            </div>
            <div>
              Your function should return: <b>{item.results}</b>
            </div>
          </div>
        ))}
    </div>
  );
}

export default test2;
