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


  async function getNewLink(e) {
    // preventDefault avoids it being rendered before all the needed input are inserted 

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
      // headers is a HTTP request specifically used for POST/PUT/PATCH 
      // headers tells the server that the request body contains a JSON string. 
      headers: { "Content-Type": "application/json" },
      // newLink is stringified 
      body: JSON.stringify(newLink),
    });
    const data = await response.json();

    alert("I am new link", data.payload);
  }


  console.log(user);

// This function was supposed to return ALL topics
// However the getTopics function is not being used 
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
// in the return, the Input component takes in a lot of different props 
// functions are passed in as yellow 
// state are passed in as blue - state is a value 
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
          getNewLink={getNewLink}
          userFirstName={userFirstName}
          userSecondName={userSecondName}
          setUserFirstName={setUserFirstName}
          setUserSecondName={setUserSecondName}
          setWeek={setWeek}
          setTopic={setTopic}
          link={link}
          setLink={setLink}
        />
        <List
          topicList={topicList}
          weekList={weekList}
          className="listComponent"
        />
      </div>
    </div>
  );
}
