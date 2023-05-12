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
  area = area.toFixed(2);
  const list = document.getElementById("list-items");
  const li = document.createElement("li");
  li.innerHTML = `
<div class="list-item">
  <p class="geometryName">${geometryName}</p>
  <p class="target-element"><span class="value">${area}</span>cm<sup>2</sup></p>
  <button class="convert-btn">Convert to m</button>
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
    firstInputField.value = "";
    return inputValue;
  } else if (sign === "second-input") {
    const secondInputField = parentNode.querySelector(".input-second");
    const inputValue = parseFloat(secondInputField.value);
    secondInputField.value = "";
    return inputValue;
  }
}

// check edit icon already found or not. because when each time calculate button is clicked then each time edit icon and value of input field will added to the edit icon section if i not check this
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
 <p><i id="edit-icon" class="fa-solid fa-pen-to-square edit-icon"></i></p>
 <p><input id="check-box" type="checkbox" name="checkbox" class="check-box"></p>
 `;
  parentNode.insertBefore(div, child1);
  const inputField = parentNode.querySelector(".input-field");
  // inputField.style.display = "none";
  const checkBox = parentNode.querySelector(".check-box");
  checkBox.style.display = "none";
}

// clear privious edit icon. if there any
function clearPreviousEditIcon() {
  const editSections = document.getElementsByClassName("edit-section");
  for (const editSection of editSections) {
    editSection.style.display = "none";
  }
}

// clear previous disable input field
function clearPreviousDisableStatus() {
  const firstInputFields = document.getElementsByClassName("input-first");
  const secondInputFields = document.getElementsByClassName("input-second");

  for (const firstInputField of firstInputFields) {
    firstInputField.disabled = false;
  }
  for (const secondInputField of secondInputFields) {
    secondInputField.disabled = false;
  }
}

// clear previous hidden input field
function clearPreviousHiddenInputField() {
  const previousInputFields = document.getElementsByClassName("input-field");
  for (const inputField of previousInputFields) {
    isDisableInputField(false, inputField);
    inputField.classList.add("input-field-block");
  }
}

// hide newly target input field
function hideInputField(parentNode) {
  const inputField = parentNode.querySelector(".input-field");
  // inputField.style.display = "none";
  inputField.classList.remove("input-field-block");
  inputField.style.display = "none";
}

// click handler for edit icon
function setHandlerEditIcon(parentNode) {
  let isOpenInputField = false;
  const targetElement = parentNode.querySelector("#edit-icon");
  targetElement.addEventListener("click", function (event) {
    const inputField = parentNode.querySelector(".input-field");
    const checkBox = parentNode.querySelector(".check-box");
    isOpenInputField = !isOpenInputField;
    if (isOpenInputField) {
      inputField.classList.add("input-field-block");
      isDisableInputField(true, parentNode);
      checkBox.style.display = "block";
    } else {
      inputField.classList.remove("input-field-block");
      inputField.style.display = "none";
      checkBox.style.display = "none";
    }
  });
}

// disabled input field
function isDisableInputField(isDisable, parentNode) {
  const inputFirst = parentNode.querySelector(".input-first");
  const inputSecond = parentNode.querySelector(".input-second");
  if (isDisable) {
    inputFirst.disabled = true;
    inputSecond.disabled = true;
  } else {
    inputFirst.disabled = false;
    inputSecond.disabled = false;
  }
}

// event handler for check box
function setHandlerCheckBoxIcon(parentNode) {
  let isOpenCheckBox = false;
  const checkBox = parentNode.querySelector(".check-box");
  checkBox.addEventListener("click", function () {
    isOpenCheckBox = !isOpenCheckBox;
    if (isOpenCheckBox) {
      isDisableInputField(false, parentNode);
    } else {
      isDisableInputField(true, parentNode);
    }
  });
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

// event handler for convert cm to m button
let isConvert = true;
function setHandlerConvertBtn() {
  const convertBtns = document.getElementsByClassName("convert-btn");
  for (const convertBtn of convertBtns) {
    convertBtn.addEventListener("click", function (event) {
      const parentNode = convertBtn.parentNode;
      const targetElement = parentNode.querySelector(".target-element");
      const valueString = parentNode.querySelector(".value");
      const value = parseFloat(valueString.innerText);
      const meterValue = value / 100;

      const targetBtn = parentNode.querySelector(".convert-btn");
      if (isConvert) {
        targetElement.innerHTML = `
        <span class="value">${meterValue}</span>m
        `;
        targetBtn.innerHTML = `
        Convert to <span class="convert-btn-value" >cm<sup>2</sup></span>
         `;
        isConvert = false;
      } else {
        targetBtn.innerHTML = `
        Convert to m
        `;
        targetElement.innerHTML = `
        <span class="value">${value * 100}</span>cm<sup>2</sup>
        `;
        isConvert = true;
      }
    });
  }
}
