import { useState } from "react";
import "./App.css";
import List from "../List";
import Input from "../Input";
import ListItem from "../ListItem";

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(text) {
    setTodos([...todos, text]);
  }
  return (
    <div className="App">
      <div className="toDoContainer">
        <h1>Today, you aim at achieving the following: </h1>
        <Input onData={addTodo} />
        <List />
        <ListItem />
      </div>
    </div>
  );
}

export default App;
