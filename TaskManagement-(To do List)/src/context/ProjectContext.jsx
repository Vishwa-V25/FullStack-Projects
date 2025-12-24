import { createContext, useReducer, useEffect } from "react";

export const ProjectContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];

    case "UPDATE_PROJECT":
      return state.map(p =>
        p.id === action.payload.id ? action.payload : p
      );

    default:
      return state;
  }
};

export const ProjectProvider = ({ children }) => {
  const [projects, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("projects")) || []
  );

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <ProjectContext.Provider value={{ projects, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};
