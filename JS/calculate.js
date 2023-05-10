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
      alert("Already added to calculation list!");
    } else {
      // get first and second input field value
      const firstValue = getInputValue(parentNode, "first-input");
      const secondValue = getInputValue(parentNode, "second-input");

      // calculate area of this target traingle
      const area = calculateGeometryArea(geometryName, firstValue, secondValue);

      // create element and appendchild to the calculation list
      addToCalculationList(geometryName, area);
    }
  });
}

// event handler for cancel any traingle calculation from the area calculation list
document
  .getElementById("list-items")
  .addEventListener("click", function (event) {
    const parent = event.target.parentNode.parentNode;
    parent.remove(parent);
  });
