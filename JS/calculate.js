// set event handler for each calculate button
const traingles = document.getElementsByClassName("calculate-btn");
for (const traingle of traingles) {
  traingle.addEventListener("click", function (event) {
    // select parent node by target
    const parentNode = event.target.parentNode;
    const geometryName = parentNode.querySelector(".geometry-name").innerText;

    // check that alreay this geometry remain or not
    const res = isFound(geometryName);
    if (res) {
      alert("Already added This calculation to the list!");
    } else {
      // get first and second input field value
      const firstValue = getInputValue(parentNode, "first-input");
      const secondValue = getInputValue(parentNode, "second-input");

      // calculate area of this target traingle
      const area = calculateGeometryArea(geometryName, firstValue, secondValue);
      if (area) {
        // create element and appendchild to the calculation list
        addToCalculationList(geometryName, area);

        // add edit icon and checkbox and one paragraph with input field value
        addEditIcon(parentNode, firstValue, secondValue);
      }
    }
    /* set event handler to the cancel button in calculation section 
 why i am doing this inside calculate handler ? 
 answer: after added one triangle to the calculation list. then i am adding event listener by loop. when each time triangle is added then this loop will be run again. and then as well as event listener behind the calculation list is added.
 */
    // set event listener behind the each item of calculation list
    setHandlerCancelBtn();
  });
}

// event handler for cancel any traingle calculation from the area calculation list

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
