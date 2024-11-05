/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-3xl">
        {categories.map((category, idx) => (
          <NavLink
            to={`/category/${category.category}`}
            className={({ isActive }) =>
              `grid btn font-medium text-lg mt-5 rounded-full hover:bg-[#9538E2] ${
                isActive
                  ? "bg-[#9538E2] text-white"
                  : "hover:bg-[#9538E2] hover:text-white "
              } `
            }
            key={idx}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
