function TrollySelector({ lorry, setGridItems }) {
  function generateGrid(number) {
    let arr = [];
    for (let i = 0; i < number; i++) {
      arr.push("");
    }
    setGridItems(arr);
  }
  return (
    <div className=" flex justify-evenly items-center lg:w-1/2 w-full h-7 mt-2">
      {lorry.map((item, index) => (
        <button
          className="hover:bg-button-main-hover  w-10 border-2 rounded"
          onClick={() => generateGrid(item)}
          key={index}
        >
          {item}T
        </button>
      ))}
    </div>
  );
}

export default TrollySelector;
