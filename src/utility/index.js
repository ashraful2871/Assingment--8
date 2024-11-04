// get all gadget from local storage

const getAllCarts = () => {
  const all = localStorage.getItem("gadgets");
  if (all) {
    const cart = JSON.parse(all);
    return cart;
  } else {
    return [];
  }
};
//add to gadget local storage

const addCarts = (gadget) => {
  const cart = getAllCarts();
  const isExist = cart.find((item) => item.id == gadget.id);
  if (isExist) {
    alert("already exist");
    return;
  }
  cart.push(gadget);
  localStorage.setItem("gadgets", JSON.stringify(cart));
  // success toast
};
// remove from local storage

const removeCart = (id) => {
  const cart = getAllCarts();
  const remaining = cart.filter((gadget) => gadget.id != id);
  localStorage.setItem("gadgets", JSON.stringify(remaining));
  //success toast
};

export { getAllCarts, addCarts, removeCart };
