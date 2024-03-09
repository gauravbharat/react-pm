import { useRef } from "react";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";

export default function NewProject({ onCancel, onSave }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.getValue();
    const description = descriptionRef.current.getValue();
    const dueDate = dueDateRef.current.getValue();

    console.log("handleSave : title", title);
    console.log("handleSave : description", description);
    console.log("handleSave : dueDate", dueDate);

    onSave({
      title,
      description,
      dueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>
        </li>
        <li>
          <Button btnStyle="raised" type="button" onClick={handleSave}>
            Save
          </Button>
        </li>
      </menu>

      <div>
        <Input ref={titleRef} label="Title" id="title" type="text" />
        <Input
          ref={descriptionRef}
          label="Description"
          id="description"
          textarea
        />
        <Input ref={dueDateRef} label="Due Date" id="dueDate" type="date" />
      </div>
    </div>
  );
}
