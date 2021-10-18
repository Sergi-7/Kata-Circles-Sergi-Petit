import logo from "./logo.svg";
import "./App.css";
import Circle from "./Components/Circle/Circle.js";

function App() {
  const circles = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return circles.map((circle) => {
    return <Circle key={circle.id}></Circle>;
  });
}

export default App;
