//Plan
// test the api in postman DONE
//Import components, react stuff
// useEffect to fetch
// create state
//
import "./TechDisplay.css";
import Input from "./Input/Input";
import List from "./List/List";
import { useState } from "react";
// import { getUsers } from "../../../../../../Backend/bc13_w9_project-backend-lucky-number-seven/backend/models/sqlModels";
const url = "http://localhost:3000";

export default function TechDisplay() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userSecondName, setUserSecondName] = useState("");
  const [link, setLink] = useState("");
  const [user, setUser] = useState([
    {
      user_firstname: "",
      user_surname: "",
    },
  ]);
  const [week, setWeek] = useState([]);
  const [weekList, setWeekList] = useState([]);
  const [topic, setTopic] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [selectTopic, setSelectTopic] = useState([]);
  // useEffect(() => {

  // async function getNewUser(e) {
  //   e.preventDefault();
  //   console.log(userFirstName, userSecondName);
  //   const newUser = {
  //     user_firstname: userFirstName,
  //     user_surname: userSecondName,
  //   };
  //   const response = await fetch(`${url}/api/userRoutes`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newUser),
  //   });
  //   const data = await response.json();

  //   alert("I am new guy", data.payload);
  // }

  async function getNewLink(e) {
    e.preventDefault();

    const newLink = {
      user_firstname: userFirstName,
      user_surname: userSecondName,
      week: week,
      topic: topic,
      links: link,
    };
    const response = await fetch(`${url}/api/linkRoutes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLink),
    });
    const data = await response.json();

    alert("I am new link", data.payload);
  }

  // const response = await fetch(`${url}/api/userRoutes${newUser}`);
  // const data = await response.json();

  // const newPerson = [...user, newUser.user_firstname, newUser.user_surname];
  // console.log(data);
  // console.log(newPerson);

  console.log(user);

  // async function getByWeek() {
  //   const response = await fetch(`${url}/api/linkRoutes`);
  //   const data = await response.json();
  //   setWeek(data.payload);
  // }
  // console.log(week);

  async function getTopics() {
    const response = await fetch(`${url}/api/linkRoutes`);
    const data = await response.json();
    setSelectTopic(data.payload.topic);
  }
  console.log(week);

  async function handleChange(event) {
    setTopic(event.target.value);
  }
  console.log("this is me", topic);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`${url}/api/linkRoutes?topic=${topic}`);
    const data = await response.json();
    setTopicList(data.payload);
  }
  async function handleChangeWeek(event) {
    setWeek(event.target.value);
  }
  console.log("this is me", topic);

  async function handleSubmitWeek(event) {
    event.preventDefault();
    const response = await fetch(`${url}/api/linkRoutes?week=${week}`);
    const data = await response.json();
    setWeekList(data.payload);
  }
  // async function handleChangeFirstName(event) {
  //   setWeek(event.target.value);
  // }
  // console.log("this is me", topic);

  // function handleChangeUser(evt) {
  //   const value = evt.target.value;
  //   setUser({
  //     ...userFirstName,
  //     [evt.target.name]: value,
  //   });
  // }

  // async function
  // console.log(topicList);
  return (
    <div className="techDisplay">
      <div className="listAndInputs">
        <Input
          className="inputComponent"
          topic={topic}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          week={week}
          handleSubmitWeek={handleSubmitWeek}
          handleChangeWeek={handleChangeWeek}
        />
        <List
          topicList={topicList}
          weekList={weekList}
          className="listComponent"
        />
      </div>
      <div className="Test">
        {/* <form>
          <input onChange={handleChangeFirstName}></input>
          <input onChange={handleChangeSurname}></input>
          <input onChange={handleChangeWeekNumber}></input>
          <input onChange={handleChangeTopicName}></input>
          <input onChange={handleChangeLink}></input>
          <input type="submit" value="createUser"></input>
        </form> */}
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
    </div>
  );
}
