import { createContext, Dispatch } from "react";
import { Class } from "../../types";

export const ClassContext = createContext<{
  chosenClasses: Class[];
  setChosenClasses: Dispatch<React.SetStateAction<Class[]>>;
  hoveredClass?: Class | undefined;
  setHoveredClass: Dispatch<React.SetStateAction<Class | undefined>>;
}>({
  chosenClasses: [],
  setChosenClasses: () => { },
  setHoveredClass: () => { },
});
