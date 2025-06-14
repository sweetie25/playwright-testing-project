import { useState } from "react";
import NewCustomerForm from "./NewCustomerForm";
import VehicleInfo from "./VehicleInfo";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Column } from "./Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

function CustomerSection({
  onClick,
  printMode,
  togglePrintMode,
  vehicleForm,
  setVehicleForm,
}) {
  const [customerList, setCustomerList] = useState([]);
  const [showCustomerList, setShowCustomerList] = useState(false);

  function handleTotalTrollies(arr) {
    let trolleyCount = 0;
    arr.map((item) => (trolleyCount += Number(item.trollies)));
    return trolleyCount;
  }

  // ----------- Testing local storage for customer list ----19.2.24---------------

  // function saveCustomerLocalStorage() {
  //   localStorage.setItem(
  //     vehicleForm.date + vehicleForm.driver,
  //     JSON.stringify(customerList)
  //   );
  //   console.log(localStorage);
  // }

  // ---------------------------------------------------------

  const getTaskPos = (id) => customerList.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setCustomerList((customerList) => {
      const origonalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(customerList, origonalPos, newPos);
    });
  };
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 0.01,
    },
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    pointerSensor,
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // -----------------------------------------------------------------
  return (
    <div className="lg:ml-4">
      <div className="flex justify-center items-center gap-1">
        {printMode ? (
          <button
            className="dark:bg-dark-button-main border-2 dark:border-none w-[70%] rounded-xl mt-2 mb-2 p-2 hover:bg-button-main-hover "
            onClick={() => setShowCustomerList(!showCustomerList)}
          >
            Add Customer
          </button>
        ) : null}
        <button
          className="dark:bg-orange-700 dark:border-2 text-white dark:border-none w-[20%] p-2 rounded-xl  mt-2 mb-2 hover:bg-orange-400"
          onClick={() => {
            togglePrintMode();
            setShowCustomerList(false);
          }}
        >
          {printMode ? "Finish" : "Edit"}
        </button>
      </div>

      {showCustomerList ? (
        <div className=" lg:w-full w-full grid grid-cols-2 grid-rows-1">
          <NewCustomerForm
            setCustomerList={setCustomerList}
            customerList={customerList}
          />
          <VehicleInfo
            vehicleForm={vehicleForm}
            setVehicleForm={setVehicleForm}
          />
        </div>
      ) : null}

      <div className="dark:bg-dark-customer-input  dark:border-none border-black border-2  rounded-3xl p-3 m-2 lg:ml-0 lg:mr-0">
        {printMode ? null : (
          <div className="w-full flex justify-around mb-4">
            <p>Driver- {vehicleForm.driver.toUpperCase()}</p>
            <p>Vehicle- {vehicleForm.vehicleReg.toUpperCase()}</p>
            <p>Date- {vehicleForm.date.split("-").reverse().join("/")}</p>
          </div>
        )}
        {printMode ? (
          <h3
            className="lg:ml-2  ml-5  text-transparent dark: text-white  w-[90%] text-end hover:text-green-500 hover:cursor-pointer"
            onClick={() => onClick("Blank Trolley")}
          >
            Blank Trolley
          </h3>
        ) : null}

        <p className=" pl-1 font-bold">
          Total Trolleys- {handleTotalTrollies(customerList)}
        </p>
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <Column
            tasks={customerList}
            setTasks={setCustomerList}
            onClick={onClick}
          />
        </DndContext>
      </div>
    </div>
  );
}

export default CustomerSection;
