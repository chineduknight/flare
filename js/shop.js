const priceRangeInput = document.getElementById("price-range");
const priceRangeDisplay = document.getElementById("price-range-value");

// set the default Amount
priceRangeDisplay.innerHTML = priceRangeInput.value;

priceRangeInput.addEventListener("change", () => {
  priceRangeDisplay.innerHTML = priceRangeInput.value;
});
