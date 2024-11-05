import { useNavigate } from "react-router-dom";
import image from "../assets/Group.png";
import { Helmet } from "react-helmet";
const Review = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("/");
  };

  const handleRemove = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Helmet>
        <title>review | Gadget Haven</title>
      </Helmet>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-center items-center mb-5">
            <img src={image} alt="" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-2xl">
              comment submitted successfully
            </h3>
            <p className="py-4">Thanks for visiting our site</p>
          </div>

          <div className="modal-action">
            <form method="dialog" className="w-full">
              <button
                onClick={closeHandler}
                className="btn font-bold text-lg text-[#9538E2] border-2 border-[#9538E2] hover:text-white hover:bg-[#9538E2] w-full rounded-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="bg-[#9538E2] min-h-56">
        <div className=" text-center">
          <div className="pt-8 ">
            <h1 className="text-3xl font-bold text-white">
              Leave some comment about us
            </h1>
            <p className="py-6 text-white/75">
              We value your review and are always striving to improve. Share
              your any thoughts like negative or positive, suggestions, or
              <br />
              experiences with us, so we can continue to provide the best
              service possible.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6] p-16">
        <h2 className="text-center mb-8 text-4xl font-bold text-[#9538E2]">
          Write Comment Here :
        </h2>
        <div className="card bg-base-100 w-full shrink-0 shadow-xl container mx-auto">
          <form onSubmit={handleRemove} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Name"
                placeholder="Your Name"
                className="input input-bordered bg-[#F6F6F6] textarea-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered bg-[#F6F6F6] textarea-primary"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label ">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Your Number "
                className="input input-bordered bg-[#F6F6F6] textarea-primary"
                required
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Write Your Comment</span>
              </label>
              <textarea
                className="textarea textarea-primary h-32 bg-[#F6F6F6]"
                placeholder="Write Comment...."
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn font-bold text-lg bg-[#9538E2] text-white hover:bg-[#9538E2] rounded-full"
              >
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
