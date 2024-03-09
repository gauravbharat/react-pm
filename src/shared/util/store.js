export const getFromStore = () => {
  return JSON.parse(
    localStorage.getItem("my-projects") ||
      JSON.stringify({
        selectedProjectId: undefined, // string for selected, null for new, undefined for nothing
        projects: [],
      })
  );
};

export const setToStore = (currentState) => {
  localStorage.setItem("my-projects", JSON.stringify(currentState));
};
