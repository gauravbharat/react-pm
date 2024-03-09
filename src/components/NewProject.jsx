import { useRef } from "react";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";
import Modal from "../shared/components/Modal";

export default function NewProject({ onCancel, onSave }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef(); //connect modal component

  function handleSave() {
    const title = titleRef.current.getValue();
    const description = descriptionRef.current.getValue();
    const dueDate = dueDateRef.current.getValue();

    console.group("handleSave");
    console.log("title", title);
    console.log("description", description);
    console.log("dueDate", dueDate);
    console.groupEnd();

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      !dueDate ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSave({
      title,
      description,
      dueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

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
    </>
  );
}
