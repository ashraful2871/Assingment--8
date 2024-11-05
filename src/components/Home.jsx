import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";
import Heading from "./Heading";
import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Home | Gadget Haven</title>
      </Helmet>

      <div className="bg-[#ECECEC]">
        <Banner></Banner>
        <Heading></Heading>
        <div className="grid grid-cols-4 gap-8 mt-12 pb-11 container mx-auto">
          <div className="col-span-1">
            <Categories categories={categories}></Categories>
          </div>
          <div className="col-span-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
