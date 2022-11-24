import "./Input.css";
export default function Input() {
  return (
    <form className="formClass">
      <div className="seriesOfInputs">
        <input
          className="inputFirstName"
          placeholder="Your First Name goes here"
        />
        <input
          className="inputSecondName"
          placeholder="Your Surname goes here"
        />
        <input className="week" placeholder="week goes here" />
        <input className="topic" placeholder="topic goes here" />
        <input className="link" placeholder="Your link goes here" />
      </div>
      <div className="buttonClass">
        <button className="createUser">Create User</button>
        <button className="createUser"> Show users</button>
      </div>
    </form>
  );
}
