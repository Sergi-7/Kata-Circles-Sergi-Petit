import logo from "./logo.svg";
import "./App.css";
import "./Components/Circle/Circle.js";
import Circle from "./Components/Circle/Circle.js";

function App() {
  const circles = [{}, {}, {}, {}, {}];
  return circles.map((circle) => {
    return <Circle></Circle>;
  });
}

export default App;
