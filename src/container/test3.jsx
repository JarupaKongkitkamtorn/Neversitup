import React, { useState, useEffect } from "react";
import { inputValueTest3 } from "../const/inputValue";
import { handleLogicTest3 } from "../function/functionTest3";

function test3() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    let resultValue = inputValueTest3.map((item) => ({
      testValue: JSON.stringify(item),
      results: handleLogicTest3(item),
    }));
    setValue(resultValue);
  }, []);
  return (
    <div className="test">
      <div className="divQ">
        <div className="header">Test 3</div>
        <div className="question">
          Show coding logic and unit test <b>Find the odd int</b> (Choose your
          the most skilled)
        </div>
        <div className="question">
          Given an array of integers, find the one that appears an odd number of
          times.
        </div>
        <div className="question">
          There will always be only one integer that appears an odd number of
          times.
        </div>
      </div>
      <div className="header-result">Result</div>
      {value.length !== 0 &&
        value.map((item, id) => (
          <div className="result" key={id}>
            <b>{item.testValue}</b> should return <b>{item.results.number}</b>,
            because it occurs <b>{item.results.time}</b> time (which is odd).
          </div>
        ))}
    </div>
  );
}

export default test3;
