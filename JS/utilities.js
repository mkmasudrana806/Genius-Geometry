// get input value by class name
function getInputTextByElement(element) {
  const valueInString = element.value;
  const inputValue = parseFloat(valueInString);
  return inputValue;
}

// get innert text by id
function getInnerTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementInnerValue = element.innerText;
  const innerText = parseFloat(elementInnerValue);
  return innerText;
}

// calculate geometry
function calculateGeometryArea(name, firstValue, secondValue) {
  let result;
  if (isNaN(firstValue) || isNaN(secondValue)) {
    alert("Invalid input!");
    return;
  } else {
    if (
      name === "Triangle" ||
      name === "Rhombus" ||
      name === "Pentagon" ||
      name === "Ellipse"
    ) {
      result = 0.5 * firstValue * secondValue;
    } else if (name === "Rectangle" || name === "Parallelogram") {
      result = firstValue * secondValue;
    } else if (name === "Ellipse") {
      result = Math.PI * firstValue * secondValue;
    }
    return result;
  }
}
