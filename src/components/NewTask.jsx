import { useState } from "react";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <Input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}
