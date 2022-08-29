let counterText = document.getElementById("counter");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let resetBtn = document.querySelector(".reset");

const COUNTER_INITIAL_VALUE = 0;
const LOWER_COUNT = 1;
const ADD_COUNT = 1;

let counter = COUNTER_INITIAL_VALUE;
counterText.textContent = counter;

function addCount() {
  counter = counter + ADD_COUNT;
  counterText.textContent = counter;
}

function lowCount() {
  counter = counter - LOWER_COUNT;
  counterText.textContent = counter;
}

function resetCount() {
  counter = COUNTER_INITIAL_VALUE;
  counterText.textContent = counter;
}

nextBtn.addEventListener("click", addCount);
prevBtn.addEventListener("click", lowCount);
resetBtn.addEventListener("click", resetCount);
