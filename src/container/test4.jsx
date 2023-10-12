import React, { useState, useEffect } from "react";
import { inputValueTest4 } from "../const/inputValue";
import { handleLogicTest4 } from "../function/functionTest4";

function test4() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    let resultValue = inputValueTest4.map((item) => ({
      testValue: JSON.stringify(item),
      results: handleLogicTest4(item),
    }));
    setValue(resultValue);
  }, []);
  return (
    <div className="test">
      <div className="divQ">
        <div className="header">Test 4</div>
        <div className="question">
          Show coding logic and unit test <b>Count the smiley faces!</b> (Choose
          your the most skilled)
        </div>
        <div className="question">
          Given an array (arr) as an argument complete the function{" "}
          <b>countSmileys</b> that should return the total number of smiling
          faces.
        </div>
        <div className="question">
          Rules for a smiling face:
          <ul>
            <li>
              Each smiley face must contain a valid pair of eyes. Eyes can be
              marked as <b>:</b> or <b>;</b>
            </li>
            <li>
              A smiley face can have a nose but it does not have to. Valid
              characters for a nose are <b>-</b> or <b>~</b>
            </li>
            <li>
              Every smiling face must have a smiling mouth that should be marked
              with either <b>{")"}</b> or <b>D</b>
            </li>
          </ul>
          No additional characters are allowed except for those mentioned.
        </div>
        <div className="question">
          Valid smiley face examples:{" "}
          <b>
            :{")"} :D ;-D :~{")"}
          </b>
        </div>
        <div className="question">
          Invalid smiley faces:{" "}
          <b>
            ;{"("} :{">"} :{"}"} :{"]"}
          </b>
        </div>
        <div className="question">
          Note. In case of an empty array return 0. You will not be tested with
          invalid input (input will always be an array). Order of the face
          (eyes, nose, mouth) elements will always be the same.
        </div>
      </div>
      <div className="header-result">Result</div>
      {value.length !== 0 &&
        value.map((item, id) => (
          <div className="result" key={id}>
            countSmileys(<b>{item.testValue}</b>) // should return{" "}
            <b>{item.results.time}</b>;
          </div>
        ))}
    </div>
  );
}

export default test4;
