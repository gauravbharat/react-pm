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

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {projectState.selectedProjectId === null && (
        <NewProject onCancel={handleCancelProject} />
      )}
      {projectState.selectedProjectId === undefined && (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      )}
    </main>
  );
}

export default App;
