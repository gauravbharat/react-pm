import Button from "../shared/components/Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onOpenProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button btnStyle="raised-2" type="button" onClick={onStartAddProject}>
          + Add project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Button
                btnStyle={
                  project.id === selectedProjectId
                    ? "menu-base-selected"
                    : "menu-base"
                }
                type="button"
                onClick={() => onOpenProject(project.id)}
              >
                {project.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
