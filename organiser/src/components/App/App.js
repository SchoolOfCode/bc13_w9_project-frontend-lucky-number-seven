import { useState } from "react";
import "./App.css";
import List from "../List";
import Input from "../Input";
import TechDisplay from '../TechDisplay/TechDisplay'
//import ListItem from "../ListItem";

function App() {
  const [toDos, setTodos] = useState([]);
  function addTodo(text) {
    setTodos([...toDos, text]);
  }

  function handleDelete(i) {
    setTodos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
  }
  return (
    <div className="App">
      <div className="toDoContainer">
        <h1>Today, you aim at achieving the following: </h1>
        <Input onData={addTodo} />
        <List toDos={toDos} handleDelete={handleDelete} />
      </div>
      <div className='TechDisplay'>
        <TechDisplay/>
      </div>
    </div>
  );
}

export default App;
