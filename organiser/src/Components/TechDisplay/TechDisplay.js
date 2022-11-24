//Plan
// test the api in postman DONE
//Import components, react stuff
// useEffect to fetch
// create state
//
import "./TechDisplay.css";
import Input from "./Input/Input";
import List from "./List/List";
import { useState, useEffect } from "react";
// import { getUsers } from "../../../../../../Backend/bc13_w9_project-backend-lucky-number-seven/backend/models/sqlModels";
const url = "http://localhost:3000";

export default function TechDisplay() {
  const [user, setUser] = useState([]);
  const [week, setWeek] = useState([]);
  const [topic, setTopic] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [selectTopic, setSelectTopic] = useState([]);
  // useEffect(() => {
  async function getUsers() {
    const response = await fetch(`${url}/api/userRoutes`);
    const data = await response.json();
    setUser(data.payload);
  }
  console.log(user);

  async function getByWeek() {
    const response = await fetch(`${url}/api/linkRoutes`);
    const data = await response.json();
    setWeek(data.payload);
  }
  console.log(week);

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
  console.log(topicList);
  return (
    <div className="techDisplay">
      <div className="listAndInputs">
        <Input className="inputComponent" />
        <List className="listComponent" />
      </div>
      <form onSubmit={handleSubmit}>
        <select>
          {topicList?.map((topic) => {
            return <option>{` ${topic.topic}`}</option>;
          })}
        </select>
        <input onChange={handleChange} type="text" value={topic}></input>
        <input type="submit" value="topic" />
      </form>
      {/* <form onSubmit={handleSubmit}>
        <select>
          {selectTopic?.map((selectTopic) => {
            return <option>{` ${selectTopic.topic}`}</option>;
          })}
        </select>
        <input type="submit" value="topic" />
      </form> */}
      <button onClick={getUsers}>I am BUTTON</button>
      <button onClick={getByWeek}>WEEK</button>

      {user.map((user) => {
        return <p> {`${user.user_firstname} ${user.user_surname}`}</p>;
      })}
      {week.map((week) => {
        return (
          <p> {`${week.week}${"      "} ${week.topic}${" "}${week.links}`}</p>
        );
      })}
      {topicList?.map((topic) => {
        return <p>{`${topic.week} ${topic.topic} ${topic.links}`}</p>;
      })}
    </div>
  );
}
<Input />;
