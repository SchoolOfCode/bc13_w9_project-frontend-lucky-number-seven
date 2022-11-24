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
  const [user, setUser] = useState({
    user_firstname: "",
    user_surname: "",
  });
  const [week, setWeek] = useState([]);
  const [weekList, setWeekList] = useState([]);
  const [topic, setTopic] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [selectTopic, setSelectTopic] = useState([]);
  // useEffect(() => {
  async function getNewUser(newUser) {
    const response = await fetch(`${url}/api/userRoutes${newUser}`);
    const data = await response.json();
    setUser(data.payload);
  }
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

  async function handleSubmitWeek(event) {
    event.preventDefault();
    const response = await fetch(`${url}/api/linkRoutes?week=${week}`);
    const data = await response.json();
    setWeekList(data.payload);
  }
  function handleChangeUser(evt) {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  }
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
        <form>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={user.user_firstname}
              onChange={handleChangeUser}
            />
          </label>
          <label>
            surname
            <input
              type="text"
              name="surname"
              value={user.user_surname}
              onChange={handleChangeUser}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
