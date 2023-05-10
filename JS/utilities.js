
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

// check already triangle is remain or not
function isFound(geometryName) {
  const parentContainer = document.getElementById("list-items");
  const lists = parentContainer.querySelectorAll(".geometryName");
  for (const list of lists) {
    if (list.innerText === geometryName) {
      return true;
    }
  }
  return false;
}

// create li element and then added to the list
function addToCalculationList(geometryName, area) {
  const list = document.getElementById("list-items");
  const li = document.createElement("li");
  li.innerHTML = `
<div class="list-item">
  <p class="geometryName">${geometryName}</p>
  <p>${area}cm<sup>2</sup></p>
  <button class="convert-btn">Convert to m<sup>2</sup></button>
  <i class="fa-solid fa-xmark cancel-btn"></i>
</div>
`;
  list.appendChild(li);
}

// get first and second input value
function getInputValue(parentNode, sign) {
  if (sign === "first-input") {
    const firstInputField = parentNode.querySelector(".input-first");
    const inputValue = parseFloat(firstInputField.value);
    return inputValue;
  } else if (sign === "second-input") {
    const secondInputField = parentNode.querySelector(".input-second");
    const inputValue = parseFloat(secondInputField.value);  
    return inputValue;
  }
}
