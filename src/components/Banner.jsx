import bannerImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="mb-96">
      <div className="hero bg-[#9538E2] min-h-[650px] rounded-3xl relative">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl text-white font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-white/75">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br />
              the coolest accessories, we have it all!
            </p>
            <button className="btn text-[#9538E2] font-bold text-xl rounded-full">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-[1000px] h-[500px] border-2 border-white bg-[#ffffff57] p-5 rounded-3xl absolute top-[75%]">
          <img className="w-full h-full rounded-3xl" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
