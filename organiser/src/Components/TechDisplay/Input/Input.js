import "./Input.css";

export default function Input({
  handleChange,
  handleSubmit,
  topic,
  handleChangeWeek,
  handleSubmitWeek,
  week,
  getNewLink,
  userFirstName,
  userSecondName,
  setUserFirstName,
  setUserSecondName,
  setWeek,
  setTopic,
  link,
  setLink,
}) {
  return (
    <div>
      <form className="formClass" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={topic}></input>
        <input type="submit" value="topic" />
      </form>
      <form className="formClass" onSubmit={handleSubmitWeek}>
        <input onChange={handleChangeWeek} type="text" value={week}></input>
        <input type="submit" value="week" />
      </form>
      <form onSubmit={(e) => getNewLink(e)}>
        <label>
          First name
          <input
            type="text"
            name="firstname"
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            name="surname"
            value={userSecondName}
            onChange={(e) => setUserSecondName(e.target.value)}
          />
          <input type="submit" value="user" />
        </label>
        <label>
          Week Number
          <input
            type="text"
            name="Week Number"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
          />
          <input type="submit" value="user" />
        </label>
        <label>
          Topic
          <input
            type="text"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <input type="submit" value="user" />
        </label>
        <label>
          Link
          <input
            type="text"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input type="submit" value="newLink" />
        </label>
      </form>
    </div>

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
