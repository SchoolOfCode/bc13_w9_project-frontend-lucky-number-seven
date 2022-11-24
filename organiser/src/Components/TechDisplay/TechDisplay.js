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
  const [topic, setTopic] = useState([]);
  const [input, setInput] = useState([]);
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

  async function getByTopic() {
    const response = await fetch(`${url}/api/linkRoutes`);
    const data = await response.json();
    setTopic(data.payload);
    const topic = data.payload.topic;
    return topic;
  }
  console.log(topic);

  async function handleSubmit(event) {
    const response = await fetch(`${url}/api/linkRoutes?topic=${topic}`);
    const data = await response.json();
    const inputTopic = data.payload.topic;
    console.log(inputTopic);
  }
  return (
    <div className="techDisplay">
      <div className="listAndInputs">
        <Input className="inputComponent" />
        <List className="listComponent" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            setInput(event.target.value);
          }}
          type="text"
          value={input}
        ></input>
        <button onClick={getByTopic}>Topic</button>
      </form>
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
      {topic.map((topic) => {
        return <p>{`${topic.week} ${topic.topic} ${topic.links}`}</p>;
      })}
    </div>
  );
}
