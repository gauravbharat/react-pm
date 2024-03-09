import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // string for selected, null for new, undefined for nothing
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleOpenProject(selectedProjectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId,
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        onOpenProject={handleOpenProject}
        projects={projectState.projects}
      />
      {projectState.selectedProjectId === null && (
        <NewProject onCancel={handleCancelProject} onSave={handleAddProject} />
      )}
      {projectState.selectedProjectId === undefined && (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      )}
    </main>
  );
}

export default App;
