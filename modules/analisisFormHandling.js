const analisisForm = document.querySelector("#analisisForm");
import showDecision from "./showDecision.js";
import createListItem from "./createListItem.js";

let plusesSum = 0;
let minusesSum = 0;

export default function analisisFormHandling() {
  analisisForm.addEventListener("submit", e => {
    e.preventDefault();
    const decisionArgument = document.querySelector("#decision").value;
    const typeSelect = document.querySelector("#typeSelect").value;
    const importanceSelect = parseInt(
      document.querySelector("#importanceSelect").value
    );

    if (typeSelect === "plus") {
      plusesSum += importanceSelect;
      createListItem("plus", decisionArgument, importanceSelect);
    } else {
      minusesSum += importanceSelect;
      createListItem("minus", decisionArgument, importanceSelect);
    }
    showDecision(plusesSum, minusesSum);
  });
}
