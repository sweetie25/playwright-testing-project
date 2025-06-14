import VechicleSection from "./VechicleSection";
import CustomerSection from "./CustomerSection";
import { useState } from "react";

function Content({ printMode, togglePrintMode, vehicleForm, setVehicleForm }) {
  const [customerValue, setCustomerValue] = useState("");

  sessionStorage.setItem("color", [customerValue]);

  return (
    <div
      id="content"
      className=" grid-cols-1 grid   md:grid-cols-2 lg:grid-rows-1 h-[80%] "
    >
      <CustomerSection
        customerName={customerValue}
        onClick={setCustomerValue}
        printMode={printMode}
        togglePrintMode={togglePrintMode}
        vehicleForm={vehicleForm}
        setVehicleForm={setVehicleForm}
      />

      <VechicleSection customerName={customerValue} printMode={printMode} />
    </div>
  );
}

export default Content;
