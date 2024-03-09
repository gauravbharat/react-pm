import Button from "../shared/components/Button";
import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex items-center justify-between my-4"
              >
                <span className="flex-grow">{task.text}</span>
                <Button
                  delBtn
                  onClick={() => onDeleteTask(task.id)}
                  type="button"
                >
                  Clear
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
