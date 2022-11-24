import "./Input.css";

export default function Input({ handleChange, handleSubmit, topic }) {
  return (
    <form className="formClass" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={topic}></input>
      <input type="submit" value="topic" />
    </form>

    // <form className="formClass">
    //   <div className="seriesOfInputs">
    //     <input
    //       className="inputFirstName"
    //       placeholder="Your First Name goes here"
    //     />
    //     <input
    //       className="inputSecondName"
    //       placeholder="Your Surname goes here"
    //     />
    //     <input className="week" placeholder="week goes here" />
    //     <input className="link" placeholder="Your link goes here" />
    //   </div>
    //   <div className="buttonClass">
    //     <button className="createUser">Create User</button>
    //     <button className="createUser">Show users</button>
    //     <button className="createUser">getByWeek</button>
    //     <button className="createUser">getByTopic</button>
    //   </div>
    // </form>
  );
}
