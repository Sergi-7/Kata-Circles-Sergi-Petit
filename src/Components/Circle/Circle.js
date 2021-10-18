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
  const [state, setState] = useState(true);

  return (
    <div
      className={state === true ? "circle" : "circle-off"}
      onClick={() => setState(state === true ? false : true)}
    ></div>
  );
};
export default Circle;
