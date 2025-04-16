const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // changed to < because .length gives last index +1
      total += cartItems[i].price; 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate >= 1 || discountRate < .01){ // validates discountRate and returns original total if not valid
    console.log("Discount must be in decimal format of tenths and/or hundredths");
    console.log("Discount not applied.")
    return total;
  } else {
    return total - total * discountRate; 
  }
}

function generateReceipt(cartItems, total) {
  let receipt = "Items: \n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price} \n`;
  });
  receipt += `Total: $${parseFloat(total.toFixed(2))}`; // Bug: total may not be a number || I made it back to integer with parseFloat
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
