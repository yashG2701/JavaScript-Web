export const homeQuantityToggle = (event, id, stock) => {
  const CurrentCardElement = document.querySelector(`#card${id}`);
  //   console.log(CurrentCardElement);

  const productQuantity = CurrentCardElement.querySelector(".productQuantity");
  //   console.log(productQuantity);

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  //   console.log(quantity);
  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
