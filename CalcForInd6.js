 /*jslint browser: true */
 function calculatePrice() {
  const quantity = document.getElementById("quantity").value;
  const serviceType =
        document.querySelector("input[name=\"serviceType\"]:checked").value;
  const option = document.getElementById("option").value;
  const property = document.getElementById("property").checked;
  let totalPrice = 0;

  if (serviceType === "1")
  {
    document.getElementById("Seek").classList.add("Hide");
    document.getElementById("optionsContainer").classList.add("Hide");
      totalPrice = quantity * 1000000;
  }

  else if (serviceType === "3")
  {
    document.getElementById("Seek").classList.remove("Hide");
    document.getElementById("optionsContainer").classList.add("Hide");
      totalPrice = quantity * 10000;
  }

  if (serviceType === "2")
  {
    document.getElementById("Seek").classList.add("Hide");
    document.getElementById("optionsContainer").classList.remove("Hide");
    if (option === "option1") {
        totalPrice = 1200 * quantity;
      }
      else if (option === "option2") {
        totalPrice = 1000 * quantity;
      }
  }

  if (serviceType === "3" && property) {
    totalPrice *= 1.5;
  }
  document.getElementById("price").textContent = "Цена: " + totalPrice;
}

document.getElementById("quantity").addEventListener("input", calculatePrice);
document.querySelectorAll("input[name=\"serviceType\"]").forEach(function (radio) {
  radio.addEventListener("change", calculatePrice);
});
document.getElementById("option").addEventListener("change", calculatePrice);
document.getElementById("property").addEventListener("change", calculatePrice);