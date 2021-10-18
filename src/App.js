import logo from "./logo.svg";
import "./App.css";
import "./Components/Circle/Circle.js";
import Circle from "./Components/Circle/Circle.js";

function App() {
  const circles = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return circles.map((circle) => {
    circle.key = circle.id;
    return <Circle></Circle>;
  });
}

export default App;
