const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const multBtn = document.querySelector(".multiplication-btn");
const divBtn = document.querySelector(".division-btn");
const result = document.querySelector(".result");
const clearBtn = document.querySelector(".clear-btn");
const leftInput = document.querySelector(".input-left");
const rightInput = document.querySelector(".input-right");



// Input validations
leftInput.addEventListener("input", () => {
  if (isNaN(leftInput.value)) {
    leftInput.classList.add("invalid");
    leftInput.classList.remove("valid");

  } if (!isNaN(leftInput.value)) {
    leftInput.classList.add("valid");
    leftInput.classList.remove("invalid");

  } if (leftInput.value == "") {
    leftInput.classList.remove("valid");
    leftInput.classList.remove("invalid");

  }
});

rightInput.addEventListener("input", () => {
  if (isNaN(rightInput.value)) {
    rightInput.classList.add("invalid");
    rightInput.classList.remove("valid");

  } if (!isNaN(rightInput.value)) {
    rightInput.classList.add("valid");
    rightInput.classList.remove("invalid");

  } if (rightInput.value == "") {
    rightInput.classList.remove("valid");
    rightInput.classList.remove("invalid");
  }
});





// Clear button
clearBtn.addEventListener("click", () => {
  leftInput.value = "";
  leftInput.classList.remove("valid");
  leftInput.classList.remove("invalid");
  rightInput.value = "";
  rightInput.classList.remove("valid");
  rightInput.classList.remove("invalid");
  result.innerHTML = ""
})



function operation(op) {
  leftNum = Number(leftInput.value);
  rightNum = Number(rightInput.value);
  if (isNaN(leftNum) || isNaN(rightNum)) {
    result.innerHTML = "Enter Numbers";
  }
  switch (op) {
    case "sum":
      result.innerHTML = leftNum + rightNum;
      break;
    case "sub":
      result.innerHTML = leftNum - rightNum;
      break;
    case "mul":
      result.innerHTML = leftNum * rightNum;
      break;
    case "div":
      result.innerHTML = leftNum / rightNum;
      break
  }
}

plusBtn.addEventListener("click", () => { operation("sum") });
minusBtn.addEventListener("click", () => { operation("sub") });
multBtn.addEventListener("click", () => { operation("mul") });
divBtn.addEventListener("click", () => { operation("div") });
