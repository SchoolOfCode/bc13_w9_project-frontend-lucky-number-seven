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
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div>
      <div className="formClass">
        <form className="formClass" onSubmit={handleSubmit}>
          <input
            className="submitInput"
            onChange={handleChange}
            type="text"
            value={topic}
          ></input>
          <input className="submitButton" type="submit" value="topic" />
        </form>
        <form className="formClass" onSubmit={handleSubmitWeek}>
          <input
            className="submitInput"
            onChange={handleChangeWeek}
            type="text"
            value={week}
          ></input>
          <input className="submitButton" type="submit" value="week" />
        </form>
      </div>
      <div className="getLink">
        <form onSubmit={(e) => getNewLink(e)}>
          <label>
            <input
              placeholder="First name"
              className="test"
              type="text"
              name="firstname"
              value={userFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Surname"
              className="test"
              type="text"
              name="surname"
              value={userSecondName}
              onChange={(e) => setUserSecondName(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Week Number"
              className="test"
              type="text"
              name="Week Number"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Topic"
              className="test"
              type="text"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Link"
              className="test"
              type="text"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <input className="test" type="submit" value="newLink" />
          </label>
        </form>
      </div>
      <div className="refreshButton">
        <button type="submit" onClick={refreshPage}>
          Refresh Button
        </button>
      </div>
    </div>
  );
}
