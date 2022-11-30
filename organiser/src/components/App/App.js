/**
 * import the required hooks from react library 
 * import the correct and required files
 */
import { useState, useEffect } from "react";
import "./App.css";
import List from "../List";
import Input from "../Input";
import TechDisplay from "../TechDisplay/TechDisplay";
import Location from "../location";
//import ListItem from "../ListItem";

function App() {
  // create a useState hook 
  // toDos is the initial value/state - this can be named anything 
  // setTodos is a function updates the value of the new state of toDos
  // useState determines the first initial state - same as toDos but at the beginning 
  const [toDos, setTodos] = useState([]);
  function addTodo(text) {

    setTodos([...toDos, text]);
    // create an immutable copy of toDos using the spread operator
    // text is currently an empty value and takes in the user input 
  }

  useEffect(() => {
    // useEffect is a React Hook that lets you synchronize a component with an external system.
    // changes the virtual DOM component 
    // localStorage is a browser's webpage storage 
    // localStorage is stored in JSON 
    // The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

    localStorage.setItem("text", JSON.stringify(toDos));
  }, [toDos]);
  // useEffect gets activated only if the dependency changes 
  // can only move forward when the person in front moves so you are dependent on the first person moving 

  function handleDelete(i) {
    setTodos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
    // slice is an array method 
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
