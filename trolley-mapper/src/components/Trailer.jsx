import GridItem from "./GirdItem";

function TrailerMap({ customerName, grid }) {
  return (
    <div
      id="trailerMap"
      className={` lg:h-{100%} lg:w-2/3 w-11/12 h-screen mt-8 flex flex-col content-center items-center `}
    >
      <div className=" border-black dark:border-white border-[3px] border-b-2  w-full h-20">
        {" "}
      </div>
      <div className=" border-black dark:border-white border-[3px] border-b-0 border-t-0 = w-1/4 h-20">
        {" "}
      </div>
      <div className=" border-black dark:border-white border-[3px] border-t-2  w-full lg:h-2/3 h-1/2 grid grid-cols-3 grid-rows-3">
        {grid.map((item, index) => (
          <div
            key={index}
            className=" border-black dark:border-white border-[1.5px]"
          >
            <GridItem value={customerName} index={index} />
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default TrailerMap;
