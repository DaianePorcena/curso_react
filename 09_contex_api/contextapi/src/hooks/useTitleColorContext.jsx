import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
  const contex = useContext(TitleColorContext);

  if (!contex) {
    console.log("Context não encontrado!");
  }
  return contex;
};
