import { useState, useEffect } from "react";

function Input({ onData }) {
  const [text, setText] = useState([]);

  useEffect(() => {
    // storing input name
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  //

  function handleSubmit(event) {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur 
    // prevents the event from happening 
    event.preventDefault();
    onData(text);
    // onData is a prop that is passed down from the function above which takes in a text parameter
    setText("");
    // setText is a function which needs to be called - 
    // initial value is an empty string because we do not want it to have a value prior to inputting a text 
  }
  return (
    <form className="toDoForm" onSubmit={handleSubmit}>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setText(event.target.value);
        }}
        value={text}
      />
      <button>To add button</button>
    </form>
  );
}

export default Input;
