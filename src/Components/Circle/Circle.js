import { useState } from "react";
import "./Circle.css";

/* const Circle = () => {
  const [className, setClassName] = useState("circle");

  return (
    <div
      className={className}
      onClick={() =>
        setClassName(className === "circle" ? "circle circle-off" : "circle")
      }
    ></div>
  );
}; */

const Circle = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div
      className={selected ? "circle" : "circle circle-off"}
      onClick={() => setSelected(!selected)}
    ></div>
  );
};
export default Circle;
