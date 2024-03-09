import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // string for selected, null for new, undefined for nothing
    projects: [],
  });

  function handleAddTask(newTaskText) {
    setProjectState((prevState) => {
      const newTask = {
        text: newTaskText,
        id: Math.random(),
      };

      const updatedProjects = JSON.parse(JSON.stringify(prevState.projects));
      let foundIndex = updatedProjects.findIndex(
        (v) => v.id === projectState.selectedProjectId
      );

      if (foundIndex > -1) {
        updatedProjects[foundIndex] = {
          ...updatedProjects[foundIndex],
          tasks: [...updatedProjects[foundIndex].tasks, newTask],
        };
      }

      // console.log("handleAddTask", foundIndex, updatedProjects);

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      const updatedProjects = JSON.parse(JSON.stringify(prevState.projects));
      let foundProjectIndex = updatedProjects.findIndex(
        (v) => v.id === projectState.selectedProjectId
      );

      if (foundProjectIndex > -1) {
        updatedProjects[foundProjectIndex] = {
          ...updatedProjects[foundProjectIndex],
          tasks: updatedProjects[foundProjectIndex].tasks.filter(
            (v) => v.id !== taskId
          ),
        };
      }

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

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
        tasks: [],
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

  function handleDeleteProject(selectedProjectId) {
    setProjectState((prevState) => {
      const updatedProjects = JSON.parse(JSON.stringify(prevState.projects));
      const foundIndex = updatedProjects.findIndex(
        (v) => v.id === selectedProjectId
      );

      if (foundIndex > -1) {
        updatedProjects.splice(foundIndex, 1);
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }

  const selectedProject = projectState.selectedProjectId
    ? projectState.projects.find((v) => v.id === projectState.selectedProjectId)
    : undefined;

  // console.log(projectState, selectedProject);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        onOpenProject={handleOpenProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />

      {projectState.selectedProjectId && (
        <SelectedProject
          project={selectedProject}
          onDelete={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
      )}

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
