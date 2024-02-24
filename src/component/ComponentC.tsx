import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const ComponentC = () => {
  console.log("ComponentC");
  const { setIsTrue, setNumber } = useThemeContext();
  return (
    <div>
      <button onClick={() => setIsTrue((prev) => !prev)}>SetIsTrue</button>
      <button onClick={() => setNumber((prev) => prev + 1)}>SetTheme</button>
    </div>
  );
};

export default ComponentC;
