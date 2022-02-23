const plusesList = document.querySelector("#plusesList");
const minusesList = document.querySelector("#minusesList");
export default function createListItem(
  type,
  decisionArgument,
  importanceSelect
) {
  const listElement = document.createElement("li");
  listElement.classList.add("benefitsApp__point");
  listElement.innerHTML = `${decisionArgument}(imp: ${importanceSelect})`;

  if (type === "plus") {
    plusesList.appendChild(listElement);
  } else {
    minusesList.appendChild(listElement);
  }
}
