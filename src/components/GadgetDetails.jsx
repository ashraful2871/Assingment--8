import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetails = () => {
  const { id } = useParams();
  const gadgetData = useLoaderData();
  const [gadget, setGadget] = useState({});

  useEffect(() => {
    const singleGadget = gadgetData.find(
      (gadget) => gadget.id === parseInt(id)
    );
    setGadget(singleGadget);
  }, [gadgetData, id]);
  const {
    product_title,
    price,
    availability,
    product_image,
    description,
    specification,
    rating,
  } = gadget;

  return (
    <div className="bg-[#ECECEC] h-[880px]">
      <div className="bg-[#9538E2] min-h-96">
        <div className=" text-center">
          <div className="pt-8 ">
            <h1 className="text-3xl font-bold text-white">Product Details</h1>
            <p className="py-6 text-white/75">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br />
              the coolest accessories, we have it all!
            </p>
          </div>
        </div>
        <div className=" bg-white w-[1280px] absolute left-72 rounded-3xl p-8">
          <div className="flex flex-col lg:flex-row gap-14">
            <img src={product_image} className="max-w-xl rounded-lg " />
            <div>
              <h1 className="text-5xl font-bold">{product_title}</h1>
              <p className="py-6">Price: {price}</p>

              <div className="w-24">
                {availability ? (
                  <p className="text-[#309C08] border border-[#309C08] rounded-full p-1 text-center font-semibold bg-[#2f9c0813]">
                    In Stock
                  </p>
                ) : (
                  <p className="text-[#f5363f] border border-[#f5363f] rounded-full p-1 text-center font-normal bg-[#f3555513]">
                    Stock Out
                  </p>
                )}
              </div>
              <p className="py-6">{description}</p>
              <p className="py-6 font-bold">
                Specification:
                <>
                  {specification &&
                    Object.keys(specification).map((spec, idx) => (
                      <li className="font-normal ml-6 list-disc" key={idx}>
                        {specification[spec]}
                      </li>
                    ))}
                </>
              </p>
              <p className="font-bold flex items-center gap-1 mb-3">
                <span> Rating:</span>
                <span className="mask mask-star-2 bg-orange-400 text-2xl text-orange-400">
                  <CiStar />
                </span>
              </p>
              <div className="rating ">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <span className="ml-2">{rating}</span>
              </div>
              <div className="mt-5 flex gap-7">
                <button className="btn font-bold text-lg bg-[#9538E2] text-white hover:bg-[#9538E2] rounded-full">
                  Add to Card{" "}
                  <span className="text-2xl">
                    <IoMdCart />
                  </span>
                </button>

                <button className="btn btn-circle text-3xl bg-white hover:bg-white font-bold rounded-full pr-2 p-2 border-2 border-[#11101048]">
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
