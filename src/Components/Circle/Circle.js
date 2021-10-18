import { useState } from "react";
import "./Circle.css";

const Circle = () => {
  const [className, setClassName] = useState("circle");

  return (
    <div
      className={className}
      onClick={() =>
        setClassName(className === "circle" ? "circle circle-off" : "circle")
      }
    ></div>
  );
};

export default Circle;
