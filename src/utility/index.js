import toast from "react-hot-toast";

const newStorageEvent = () => {
  window.dispatchEvent(new CustomEvent("storage"));
};

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
    toast.error("Already exist");
    return;
  }
  cart.push(gadget);
  localStorage.setItem("gadgets", JSON.stringify(cart));
  newStorageEvent();
  toast.success("Successfully add to cart");
};
// remove from local storage

const removeCart = (id) => {
  const cart = getAllCarts();
  const remaining = cart.filter((gadget) => gadget.id != id);
  localStorage.setItem("gadgets", JSON.stringify(remaining));
  newStorageEvent();
  toast.success("Successfully remove to cart");
};

// get all wish list from local storage
const getAllWishlist = () => {
  const all = localStorage.getItem("wishlist");
  if (all) {
    const wishlist = JSON.parse(all);
    return wishlist;
  } else {
    return [];
  }
};

//add wishlist to local storage

const addWishlist = (gadget) => {
  const wishlist = getAllWishlist();
  const isExist = wishlist.find((item) => item.id == gadget.id);
  if (isExist) {
    return;
  }
  wishlist.push(gadget);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  newStorageEvent();
  toast.success("Successfully add to wishlist");
};
// remove from local storage

const removeWishlist = (id) => {
  const wishlist = getAllWishlist();
  const remaining = wishlist.filter((gadget) => gadget.id != id);
  localStorage.setItem("wishlist", JSON.stringify(remaining));
  newStorageEvent();
  toast.success("Successfully remove to wishlist");
};
export {
  getAllCarts,
  addCarts,
  removeCart,
  addWishlist,
  getAllWishlist,
  removeWishlist,
};
