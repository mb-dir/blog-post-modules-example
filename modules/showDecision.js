const finalDecision = document.querySelector("#finalDecision");
export default function showDecision(plusesSum, minusesSum) {
  if (plusesSum > minusesSum) {
    finalDecision.innerHTML = "The sum of importance is bigger for pluses";
  } else if (plusesSum === minusesSum) {
    finalDecision.innerHTML = "50/50";
  } else {
    finalDecision.innerHTML = "The sum of importance is bigger for minuses";
  }
}
