import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

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
        <p>No gadget found</p>
      )}
    </div>
  );
};

export default GadgetsCard;
