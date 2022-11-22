import { useState } from "react";

function Input({ onData }) {
  const [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onData(text);
    setText("");
  }
  return (
    <form onSubmit={handleSubmit}>
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
