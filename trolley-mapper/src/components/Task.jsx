import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";

export const Task = ({
  id,
  tasks,
  setTasks,
  title,
  extras,
  trollies,
  index,
  onClick,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  function handleDel(index) {
    const newList = tasks.filter((item) => tasks.indexOf(item) !== index);
    setTasks(newList);
  }

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  //   attaching the onClick to the index number
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key == index + 1) {
        const list = tasks.filter((item) => tasks.indexOf(item) === index);
        onClick(list[0].name);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [tasks]);
  //   ------------------------------------------

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      className="touch-none"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      key={id}
      tabIndex={0}
    >
      <div
        onClick={() => onClick(title)}
        className="w-full h-auto lg:h-auto grid grid-rows-1  grid-cols-[3fr_3fr] lg:grid-cols-[2fr_3fr] border-b-2 dark:border-gray-500  hover:border-green-500 active:border-green-300 focus-within:bg-red-500"
      >
        <div className="flex flex-row lg:gap-1 ">
          <div>
            <button
              onClick={() => handleDel(index)}
              className="w-4 h-full ml-1 mr-1 text-sm lg:text-base text-transparent dark:text-red-600 hover:text-white"
            >
              X
            </button>
          </div>
          <h3 className="flex lg:text-2xl   items-center sm:text-base ">
            {index + 1} - {capitalizeFirstLetter(title)}
          </h3>
        </div>

        <div className="text-2xl flex flex-row justify-start lg:justify-end gap-2 pr-0 lg:pr-7 w-full">
          {trollies ? (
            <p className="text-black dark:text-red-500 flex justify-center items-center  ">
              {" "}
              {trollies}T
            </p>
          ) : null}
          <p className="text-red-500 font-bold dark:text-white flex items-center">
            {extras}
          </p>
        </div>
      </div>
    </div>
  );
};
