import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const ComponentA = () => {
  console.log("ComponentA");
  const { number } = useThemeContext();
  return <div>{number}</div>;
};

export default ComponentA;
