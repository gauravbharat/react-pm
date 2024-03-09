import Button from "../shared/components/Button";
import Input from "../shared/components/Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button type="button">Cancel</Button>
        </li>
        <li>
          <Button btnStyle="raised" type="button">
            Save
          </Button>
        </li>
      </menu>

      <div>
        <Input label="Title" id="title" type="text" />
        <Input label="Description" id="description" textarea />
        <Input label="Due Date" id="dueDate" type="date" />
      </div>
    </div>
  );
}
