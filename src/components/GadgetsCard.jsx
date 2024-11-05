import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import errorPage from "../assets/error.webp";

const GadgetsCard = () => {
  const gadgetData = useLoaderData();
  const { category } = useParams();
  const [gadget, setGadget] = useState([]);

  useEffect(() => {
    if (category && category != "All Gadgets") {
      const filteredBtCategory = [...gadgetData].filter(
        (gadget) => gadget.category === category
      );
      setGadget(filteredBtCategory);
    } else {
      setGadget(gadgetData);
    }
  }, [category, gadgetData]);

  return (
    <div className="grid grid-cols-3 gap-6 ">
      {gadget.length > 0 ? (
        gadget.map((gadget, idx) => (
          <div key={idx}>
            <Card gadget={gadget}></Card>
          </div>
        ))
      ) : (
        <div className="flex justify-center flex-col col-span-3 items-center min-h-[660px] bg-white rounded-3xl shadow-2xl">
          <div className="mb-10">
            <img src={errorPage} alt="" />
          </div>
          <p className="text-4xl font-bold">no gadget found</p>
        </div>
      )}
    </div>
  );
};

export default GadgetsCard;
