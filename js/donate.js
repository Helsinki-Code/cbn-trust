const amountButtons = document.querySelectorAll(".amount-button");
const amountInput = document.querySelector("#customAmount");
const selectedAmount = document.querySelector("#selectedAmount");

function setAmount(label) {
  if (selectedAmount) selectedAmount.textContent = label;
}

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    if (amountInput) amountInput.value = "";
    setAmount(button.dataset.amount);
  });
});

if (amountInput) {
  amountInput.addEventListener("input", () => {
    amountButtons.forEach((item) => item.classList.remove("active"));
    setAmount(amountInput.value ? `₹${amountInput.value}` : "Choose an amount");
  });
}
