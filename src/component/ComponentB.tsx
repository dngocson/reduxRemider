import { useThemeContext } from "../context/ThemeContext";

const ComponentB = () => {
  console.log("ComponentB");
  const { isTrue } = useThemeContext();
  return <div>{isTrue ? <p>True</p> : <p>False</p>}</div>;
};

export default ComponentB;
