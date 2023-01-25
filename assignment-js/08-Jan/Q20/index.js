// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Add "Meat" in the beginning of the array
function addMeat() {
  return shoppingCart.unshift("Meat");
}

// function to check and add sugar in the shopping cart
function addSugar() {
  if (!shoppingCart.includes("Sugar")) {
    return shoppingCart.push("Sugar");
  } else {
    console.log("Sugar is already in the cart");
  }
}

// function to remove "Honey"
function removeHoney() {
  //   return shoppingCart.filter((item) => item !== "Honey"); // does not modify the original list
  let honeyIndex = shoppingCart.indexOf("Honey");
  return shoppingCart.splice(honeyIndex, 1);
}

// function to modify tea

function modifyTea() {
  let teaIndex = shoppingCart.indexOf("Tea");
  return shoppingCart.splice(teaIndex, 1, "Green Tea");
}

addMeat();
addSugar();
// console.log(removeHoney());
removeHoney();
modifyTea();
console.log(shoppingCart);
