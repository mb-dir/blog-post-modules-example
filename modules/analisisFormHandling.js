const analisisForm = document.querySelector("#analisisForm");

export default function analisisFormHandling() {
  analisisForm.addEventListener("submit", e => {
    e.preventDefault();
    const decisionArgument = document.querySelector("#decision").value;
    const typeSelect = document.querySelector("#typeSelect").value;
    const importanceSelect = parseInt(
      document.querySelector("#importanceSelect").value
    );

    console.log(decisionArgument, typeSelect, importanceSelect);
  });
}
