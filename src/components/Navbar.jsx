import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cartCountdown, setCartCountdown] = useState(0);
  const [wishlistCountdown, setWishlistCountdown] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleCart = () => {
    navigate("/dashboard");
  };
  useEffect(() => {
    const newCount = () => {
      const GadgetsCard = JSON.parse(localStorage.getItem("gadgets")) || [];
      const gadgetsWishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];
      setCartCountdown(GadgetsCard.length);
      setWishlistCountdown(gadgetsWishlist.length);
    };
    newCount();

    window.addEventListener("storage", newCount);

    return () => {
      window.addEventListener("storage", newCount);
    };
  }, [cartCountdown]);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold btn hover:bg-[#9538E2] ${
              isActive
                ? "text-white bg-[#9538E2]"
                : "hover:bg-[#9538E2] hover:text-white bg-white"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold btn hover:bg-[#9538E2] ${
              isActive
                ? "text-white bg-[#9538E2]"
                : "hover:bg-[#9538E2] hover:text-white bg-white"
            }`
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold btn hover:bg-[#9538E2] ${
              isActive
                ? "text-white bg-[#9538E2]"
                : "hover:bg-[#9538E2] hover:text-white bg-white"
            }`
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold btn hover:bg-[#9538E2] ${
              isActive
                ? "text-white bg-[#9538E2]"
                : "hover:bg-[#9538E2] hover:text-white bg-white"
            }`
          }
          to="/review"
        >
          Review
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar mt-7 px-52 z-10 ${
        isHomePage
          ? "bg-[#9538E2] top-10 absolute z-50 pt-6 text-white rounded-t-3xl"
          : "bg-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-5 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-7">
        <button
          onClick={handleCart}
          className={`btn-circle btn-outline btn text-2xl hover:bg-[#9538E2] relative ${
            isHomePage ? "bg-white" : ""
          }`}
        >
          <IoMdCart />{" "}
          <span
            className={`absolute -top-[50%] right-[15%] ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            {cartCountdown}
          </span>
        </button>

        <button
          onClick={handleCart}
          className={`btn-circle btn-outline btn text-2xl hover:bg-[#9538E2] relative ${
            isHomePage ? "bg-white" : ""
          }`}
        >
          <FaRegHeart />{" "}
          <span
            className={`absolute -top-[50%] right-[11%] ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            {wishlistCountdown}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
