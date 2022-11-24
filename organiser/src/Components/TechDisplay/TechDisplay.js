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
  // useEffect(() => {
  async function getUsers() {
    const response = await fetch(`${url}/api/userRoutes`);
    const data = await response.json();

    // console.log(data);
    setUser(data.payload);
  }
  // getUsers()
  //   }, []);
  console.log(user);

  return (
    <div className="techDisplay">
      <div className="listAndInputs">
        <Input className="inputComponent" />
        <List className="listComponent" />
      </div>

      <button onClick={getUsers}>I am BUTTON</button>

      {user.map((user) => {
        return <p> {user.user_firstname}</p>;
      })}
    </div>
  );
}
