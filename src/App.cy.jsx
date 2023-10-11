import { handleLogicTest2, factorial } from "./function/functionTest2";
import { handleLogicTest3 } from "./function/functionTest3";
import { handleLogicTest4 } from "./function/functionTest4";
import {
  inputValueTest2,
  inputValueTest3,
  inputValueTest4,
} from "./const/inputValue";

it("Test 2", () => {
  for (let i = 0; i < inputValueTest2.length; i++) {
    cy.wrap(handleLogicTest2(inputValueTest2[i])).should(
      "have.length",
      factorial(inputValueTest2[i].length)
    );
  }
});

it("Test 3", () => {
  for (let i = 0; i < inputValueTest3.length; i++) {
    cy.wrap(handleLogicTest3(inputValueTest3[i]))
      .then((res) => res.time % 2)
      .should("not.equal", 0);
  }
});

it("Test 4", () => {
  // for (let i = 0; i < inputValueTest2.length; i++) {
  //   cy.wrap(handleLogicTest2(inputValueTest2[i])).should(
  //     "have.length",
  //     factorial(inputValueTest2[i].length)
  //   );
  // }
});
