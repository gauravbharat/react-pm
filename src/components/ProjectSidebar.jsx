import Button from "../shared/components/Button";

export default function ProjectSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button btnStyle="raised-2">+ Add project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}