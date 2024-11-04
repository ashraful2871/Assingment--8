import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ gadget }) => {
  const { product_title, product_image, price } = gadget;
  return (
    <div className="">
      <div className="card card-compact bg-base-100  shadow-xl border-2 p-5">
        <figure className=" h-56">
          <img
            className="w-full  h-full object-cover"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions justify-start">
            <Link to={`/gadget/${gadget.id}`}>
              <button className="btn text-[#9538E2] border border-[#9538E2] rounded-full hover:bg-[#9538E2] hover:text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
