// set event handler for each calculate button
const traingles = document.getElementsByClassName("calculate-btn");
for (const traingle of traingles) {
  traingle.addEventListener("click", function (event) {
    // select parent node by target
    const parentNode = event.target.parentNode;
    const geometryName = parentNode.querySelector(".geometry-name").innerText;

    // get first and second input field value
    const firstValue = getInputValue(parentNode, "first-input");
    const secondValue = getInputValue(parentNode, "second-input");

    // calculate area of this target traingle
    const area = calculateGeometryArea(geometryName, firstValue, secondValue);
    if (area) {
      // create element and appendchild to the calculation list
      addToCalculationList(geometryName, area);
      const checkEditIcon = isEditIconFound(parentNode);
      if (!checkEditIcon) {
        // add edit icon and checkbox and one paragraph with input field value
        addEditIcon(parentNode, firstValue, secondValue);
      } else {
        // if already found edit then need to just update value of edit icon paralal line paragraph value
        parentNode.querySelector("#first-value").innerText = firstValue;
        parentNode.querySelector("#second-value").innerText = secondValue;
      }
      // set event handler to the cancel button in calculation section
      setHandlerEditIcon(parentNode);
      setHandlerCheckBox(parentNode);
      setHandlerCancelBtn();
    }
  });
}

// generate random number between 0 to 256
function randomNumber() {
  return Math.round(Math.random() * 257);
}

// event handler for making random background
const carts = document.getElementsByClassName("cart");
for (const cart of carts) {
  cart.addEventListener("mouseenter", function () {
    cart.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  });
}
// event handler for remove background color when mouse is leave from cart
const cartses = document.getElementsByClassName("cart");
for (const cart of cartses) {
  cart.addEventListener("mouseleave", function () {
    cart.style.backgroundColor = "white";
  });
}
