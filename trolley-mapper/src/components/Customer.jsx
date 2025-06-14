// TODO - add a number value on the customers which changes the order that they appear

function Customer({ customerList, setCustomerList, onClick }) {
  function handleDel(index) {
    const newList = customerList.filter(
      (item) => customerList.indexOf(item) !== index
    );
    setCustomerList(newList);
  }

  return (
    <div>
      {customerList.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick([item.name])}
          className="  w-full h-11 lg:h-11 grid grid-rows-1 grid-cols-[1fr_1fr] border-b-2 "
        >
          <div className="flex flex-row lg:gap-1 ">
            <button
              className="w-6 flex items-center justify-center text-sm lg:text-lg text-transparent dark:text-red-600  hover:text-white hover:rounded-full "
              onClick={() => handleDel(index)}
            >
              X
            </button>
            <h3 className="flex lg:text-lg items-center sm:text-base  hover:text-blue-500 hover:cursor-pointer">
              {index + 1} - {item.name} {item.id}
            </h3>
          </div>

          <div className="flex flex-row gap-2 w-full">
            {item.trollies ? (
              <p className="text-red-500 flex justify-center items-center  ">
                {" "}
                {item.trollies}T
              </p>
            ) : null}
            <p className="text-amber-600 flex w-1/2 items-center">
              {item.extras}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Customer;
