import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "./Task";

export const Column = ({ tasks, setTasks, onClick }) => {
  return (
    <div>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task, index) => (
          <Task
            onClick={onClick}
            setTasks={setTasks}
            tasks={tasks}
            index={index}
            id={task.id}
            title={task.name}
            trollies={task.trollies}
            extras={task.extras}
            key={task.id}
          />
        ))}
      </SortableContext>
    </div>
  );
};
