export const subTotal = (id, price) => {
  let subTotalCost = 0;
  // FIX: Default to an empty array [] if localStorage.getItem("cart") returns null
  let carts = JSON.parse(localStorage.getItem("cart")) || []; 
  
  carts.forEach((item) => {
    if (item.id === id) {
      // NOTE: Double-check the spelling of 'quantitiy'—it should probably be 'quantity'
      subTotalCost = item.quantitiy * price; 
    }
  });
  return subTotalCost;
};

export const quantity = (id) => {
  let product = 0;
  // FIX: Default to an empty array [] if localStorage.getItem("cart") returns null
  let carts = JSON.parse(localStorage.getItem("cart")) || []; 
  
  carts.forEach((item) => {
    if (item.id === id) {
      // NOTE: Double-check the spelling of 'quantitiy'
      product = item.quantitiy; 
    }
  });
  return product;
};

export const totalCost = () => {
  let totalCost = 0;
  // FIX: Default to an empty array [] if localStorage.getItem("cart") returns null
  let carts = JSON.parse(localStorage.getItem("cart")) || []; 
  
  carts.forEach((item) => {
    // NOTE: Double-check the spelling of 'quantitiy'
    totalCost += item.quantitiy * item.price; 
  });
  return totalCost;
};