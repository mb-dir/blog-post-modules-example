const analisisForm = document.querySelector("#analisisForm");

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
    } else {
      minusesSum += importanceSelect;
    }
    console.log(plusesSum, minusesSum);
  });
}
