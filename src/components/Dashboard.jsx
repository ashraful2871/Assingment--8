import { FaSortAmountUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../utility";
import { FaXmark } from "react-icons/fa6";

const Dashboard = () => {
  const [gadget, setGadget] = useState([]);

  useEffect(() => {
    const cart = getAllCarts();
    setGadget(cart);
  }, []);

  const handleRemove = (id) => {
    removeCart(id);
    const cart = getAllCarts();
    setGadget(cart);
  };
  const handleSort = () => {
    const sort = [...gadget].sort((a, b) => b.price - a.price);
    setGadget(sort);
  };

  const totalPrice = gadget.reduce((add, item) => add + item.price, 0);
  return (
    <div className="bg-[#ECECEC] pb-96">
      <div className="bg-[#9538E2] min-h-56">
        <div className=" text-center">
          <div className="pt-8 ">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="py-6 text-white/75">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br />
              the coolest accessories, we have it all!
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-5 pb-8">
          <button className="btn font-bold text-lg bg-white text-[#9538E2] rounded-full">
            Card <span className="text-2xl"></span>
          </button>
          <button className="btn font-bold text-lg  bg-[#9538E2] text-white hover:bg-[#9538E2] rounded-full">
            Wishlist <span className="text-2xl"></span>
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl">Cart</h2>
          </div>
          <div className="flex gap-24 items-center">
            <h3 className="font-bold text-2xl">Total Cost: ${totalPrice}</h3>
            <div>
              <button
                onClick={() => handleSort(gadget.price)}
                className="btn font-bold text-lg text-[#9538E2] border-2 border-[#9538E2] ml-10 mr-6 hover:text-white hover:bg-[#9538E2] rounded-full"
              >
                Sort by Price
                <span className="text-xl">
                  <FaSortAmountUp />
                </span>
              </button>
              <button className="btn font-bold text-lg  bg-[#9538E2] text-white hover:bg-[#9538E2] rounded-full">
                Purchase <span className="text-2xl"></span>
              </button>
            </div>
          </div>
        </div>

        <div>
          {gadget.map((gadget, idx) => (
            <div
              key={idx}
              className="bg-white flex gap-8 p-5 rounded-3xl mt-8 relative"
            >
              <div className="w-52">
                <img
                  className="w-full rounded-2xl"
                  src={gadget.product_image}
                  alt=""
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-semibold text-2xl">
                  {gadget.product_title}
                </h2>
                <p className="font-light text-lg">{gadget.description}</p>
                <p className="font-semibold text-xl">Price: ${gadget.price}</p>
              </div>
              <div className="absolute -right-5 -top-4">
                <button
                  onClick={() => handleRemove(gadget.id)}
                  className="btn-circle btn btn-outline hover:bg-[#9538E2] text-red-500 text-4xl"
                >
                  <FaXmark />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
