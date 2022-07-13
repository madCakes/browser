const bitcoinButton = document.getElementById("bitcoin-button");
bitcoinButton.addEventListener("click", (e) => {
  e.target.textContent = "Hi";
});

const divs = document.querySelectorAll("div");

divs.forEach((d, i) => {
  d.addEventListener("click", (e) => {
    updateBitcoinButtonText(i);
  });
});
