// set event handler for each calculate button
const traingles = document.getElementsByClassName("calculate-btn");
for (const traingle of traingles) {
  traingle.addEventListener("click", function (event) {
    // select parent node by target
    const parentNode = event.target.parentNode;
    const geometryNameElement = parentNode.querySelector(".geometry-name");

    // get first and second input field value
    const firstInputField = parentNode.querySelector(".input-first");
    const secondInputField = parentNode.querySelector(".input-second");
    const firstValue = getInputTextByElement(firstInputField);
    const secondValue = getInputTextByElement(secondInputField);

    // calculate area of this target traingle
    const area = calculateGeometryArea(
      geometryNameElement.innerText,
      firstValue,
      secondValue
    );

    // create element and appendchild to the calculation list
    const list = document.getElementById("list-items");
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="list-item">
      <p>${geometryNameElement.innerText}</p>
      <p>${area}cm<sup>2</sup></p>
      <button class="convert-btn">Convert to m<sup>2</sup></button>
      <i class="fa-solid fa-xmark cancel-btn"></i>
    </div>
 `;
    list.appendChild(li);
  });
}


// event handler for cancel any traingle calculation from the area calculation list
document
  .getElementById("list-items")
  .addEventListener("click", function (event) {
    const parent = event.target.parentNode.parentNode;
    parent.remove(parent);
  });
