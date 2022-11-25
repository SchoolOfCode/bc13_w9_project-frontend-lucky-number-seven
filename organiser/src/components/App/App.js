import { useState, useEffect } from "react";
import "./App.css";
import List from "../List";
import Input from "../Input";
import TechDisplay from "../TechDisplay/TechDisplay";
import Location from "../location";
//import ListItem from "../ListItem";

function App() {
  const [toDos, setTodos] = useState([]);
  function addTodo(text) {
    setTodos([...toDos, text]);
  }

  useEffect(() => {
    // storing input name
    localStorage.setItem("text", JSON.stringify(toDos));
  }, [toDos]);

  function handleDelete(i) {
    setTodos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
  }

  return (
    <div>
      <Location />
      <h1 className="LuckYHeading">Lucky Number 7 take on an organiser</h1>
      <div className="App">
        <div className="toDoContainer">
          <h1>Today, you aim at achieving the following: </h1>
          <div className="inputButton">
            <Input onData={addTodo} />
            <List toDos={toDos} handleDelete={handleDelete} />
          </div>
        </div>
        <div className="TechDisplay">
          <TechDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
