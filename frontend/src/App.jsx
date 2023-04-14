import { useState } from "react";
import Quizz from "./components/Quizz";
import "./App.css";
import Connection from "./components/Connection";

function App() {
  const [templeData, setTempleData] = useState([]);

  const templeOfJapan = () => {
    fetch("http://localhost:5000/temples")
      .then((resp) => resp.json())
      .then((data) => {
        setTempleData(data);
      });
  };
  return (
    <div className="App">
      <Quizz />
      <Connection />
      <p>coucou</p>
      <button type="button" onClick={templeOfJapan}>
        click me
      </button>
      {templeData.map((temple) => (
        <p key={temple.id}>{temple.name}</p>
      ))}
    </div>
  );
}

export default App;
