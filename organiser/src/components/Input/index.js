import { useState, useEffect, useRef } from "react";

function Input({ onData }) {
  const [text, setText] = useState([]);

  useEffect(() => {
    // storing input name
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  //

  function handleSubmit(event) {
    event.preventDefault();
    onData(text);
    setText("");
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
