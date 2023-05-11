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

// check edit icon already found or not. because when each time calculate button is clicked then each time edit icon will added if i not check this

function isEditIconFound(parentNode) {
  const check = parentNode.querySelector(".edit-icon");
  if (check) {
    return true;
  } else {
    return false;
  }
}
// add edit icon and checkbox icon
function addEditIcon(parentNode, firstInputValue, secondInputValue) {
  const child1 = parentNode.children[1];
  const div = document.createElement("div");
  div.classList.add("edit-section");
  div.innerHTML = `
 <p>b = <span id="first-value">${firstInputValue}</span>cm</p>
 <p>b = <span id="second-value">${secondInputValue}</span>cm</p>
 <p><i class="fa-solid fa-pen-to-square edit-icon"></i></p>
 <p><input type="checkbox" name="checkbox" class="check-box"></p>
 `;
  parentNode.insertBefore(div, child1);
  const inputField = parentNode.querySelector(".input-field");
  inputField.style.display = "none";
  const checkBox = parentNode.querySelector(".check-box");
  checkBox.style.display = "none";
}

let isDisabled = false;
function setHandlerEditIcon(parentNode) {
  // event halder for edit button
  const editIcon = parentNode.querySelector(".edit-icon");
  editIcon.addEventListener("click", function () {
    isDisabled = !isDisabled;
    const checkBox = parentNode.querySelector(".check-box");
    const inputField = parentNode.querySelector(".input-field");
    const inputFirst = parentNode.querySelector(".input-first");
    const inputSecond = parentNode.querySelector(".input-second");

    if (isDisabled) {
      checkBox.style.display = "block";
      inputField.classList.add("input-field-block");
      inputFirst.disabled = true;
      inputSecond.disabled = true;
    } else if (!isDisabled) {
      checkBox.style.display = "none";
      inputField.style.display = "none";
      inputField.classList.remove("input-field-block");
    }
  });
}

let isOpenCheckBox = false;
function setHandlerCheckBox(parentNode) {
  // event halder for check box
  const checkBox = parentNode.querySelector(".check-box");
  checkBox.addEventListener("click", function () {
    isOpenCheckBox = !isOpenCheckBox;
    const inputFirst = parentNode.querySelector(".input-first");
    const inputSecond = parentNode.querySelector(".input-second");

    if (isOpenCheckBox) {
      inputFirst.disabled = false;
      inputSecond.disabled = false;
    } else if (!isOpenCheckBox) {
      inputFirst.disabled = true;
      inputSecond.disabled = true;
    }
  });
}
