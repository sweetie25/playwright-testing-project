import { useState } from "react";
import LorryMap from "./Lorry";
import TrollySelector from "./trollySelector";
import TrailerMap from "./Trailer";

function VechicleSection({ customerName, printMode }) {
  // These are the hardscoded values for the lorry or trailer trolly options
  let lorryButtons = [4, 8, 12, 16, 20, 24];
  let trailerButtons = [3, 6, 7];

  const [vehicle, setVehicle] = useState("lorry");
  const [lorry, setLorry] = useState(lorryButtons);
  const [gridItems, setGridItems] = useState([]);

  function handleTrailer() {
    setVehicle("trailer");
    setLorry(trailerButtons);
    setGridItems([]);
  }

  function handleLorry() {
    setVehicle("lorry");
    setLorry(lorryButtons);
    setGridItems([]);
  }

  return (
    <div className=" p-2 flex h-full mt-8 lg:mt-0 content-center flex-col items-center ">
      {printMode ? (
        <div className="mb-2">
          <button
            onClick={handleLorry}
            className="mr-4 text-lg rounded dark:bg-dark-button-main w-14 hover:bg-button-main-hover"
          >
            Lorry
          </button>
          <button
            onClick={handleTrailer}
            className="text-lg rounded w-14 dark:bg-dark-button-main hover:bg-button-main-hover"
          >
            Trailer
          </button>
        </div>
      ) : null}

      {printMode ? (
        <TrollySelector lorry={lorry} setGridItems={setGridItems} />
      ) : null}
      {vehicle === "lorry" ? (
        <LorryMap
          customerName={customerName}
          grid={gridItems}
          printMode={printMode}
        />
      ) : (
        <TrailerMap customerName={customerName} grid={gridItems} />
      )}
    </div>
  );
}

export default VechicleSection;
