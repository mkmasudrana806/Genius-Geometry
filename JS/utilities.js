// calculate geometry area
function calculateGeometryArea(name, firstValue, secondValue) {
  let result;
  if (
    isNaN(firstValue) ||
    isNaN(secondValue) ||
    firstValue < 0 ||
    secondValue < 0
  ) {
    alert("Invalid input!");
    return;
  }
  if (name === "Triangle" || name === "Rhombus" || name === "Pentagon") {
    result = 0.5 * firstValue * secondValue;
  } else if (name === "Rectangle" || name === "Parallelogram") {
    result = firstValue * secondValue;
  } else if (name === "Ellipse") {
    result = Math.PI * firstValue * secondValue;
  }
  return result;
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

// set event listener to the cancel button inside calculation list

function setHandlerCancelBtn() {
  const cancelBtns = document.getElementsByClassName("cancel-btn");
  for (const cancelBtn of cancelBtns) {
    cancelBtn.addEventListener("click", function (event) {
      const parent = event.target.parentNode.parentNode;
      parent.remove(parent);
    });
  }
}
// get first and second input value
function getInputValue(parentNode, sign) {
  if (sign === "first-input") {
    const firstInputField = parentNode.querySelector(".input-first");
    const inputValue = parseFloat(firstInputField.value);
    firstInputField.value = "";
    return inputValue;
  } else if (sign === "second-input") {
    const secondInputField = parentNode.querySelector(".input-second");
    const inputValue = parseFloat(secondInputField.value);
    secondInputField.value = "";
    return inputValue;
  }
}

// add edit icon and checkbox icon
function addEditIcon(parentNode, firstInputValue, secondInputValue) {
  const child1 = parentNode.children[1];
  const div = document.createElement("div");
  div.classList.add("edit-section");
  div.innerHTML = `
 <p>b = <span>${firstInputValue}</span>cm</p>
 <p>b = <span>${secondInputValue}</span>cm</p>
 <p><i class="fa-solid fa-pen-to-square"></i></p>
 <p><i class="fa-regular fa-square-check check-box"></i></p>
 `;
  parentNode.insertBefore(div, child1);
  const inputField = parentNode.querySelector(".input-field");
  inputField.style.display = "none";
}
