import GridItem from "./GirdItem";

function LorryMap({ customerName, grid }) {
  return (
    <div
      className={`  border-[3px] dark:border-white border-black lg:h-[100%] lg:w-[80%] sm:h-screen w-full h-screen mt-4 grid grid-cols-4 grid-rows-6 {printMode ? "border-yellow-500 : border-red-500"}`}
    >
      {grid.map((item, index) => (
        <div
          key={index}
          className=" border-[1.5px] dark:border-white border-black "
        >
          <GridItem value={customerName} index={index} />
        </div>
      ))}
    </div>
  );
}

export default LorryMap;
