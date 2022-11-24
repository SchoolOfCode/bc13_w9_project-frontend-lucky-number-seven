import "./Input.css";
import { useState } from "react";
const url = "http://localhost:3000";

export default function Input() {
  const [topic, setTopic] = useState("");
  const [topicList, setTopicList] = useState([]);
  async function handleChange(event) {
    setTopic(event.target.value);
  }
  console.log("this is me", topic);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`${url}/api/linkRoutes?topic=${topic}`);
    const data = await response.json();
    setTopicList(data.payload);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" value={topic}></input>
          <input type="submit" value="topic" />
        </form>
      </div>
    );
  }
}

//       <form className="formClass">
//         <div className="seriesOfInputs">
//           <input
//             className="inputFirstName"
//             placeholder="Your First Name goes here"
//           />

//           <input
//             className="inputSecondName"
//             placeholder="Your Surname goes here"
//           />
//           <input className="week" placeholder="week goes here" />
//           <form onSubmit={handleSubmit}>
//             <input onChange={handleChange} type="text" value={topic}></input>
//             <input type="submit" value="topic" />
//           </form>
//           <input className="link" placeholder="Your link goes here" />
//         </div>
//         <div className="buttonClass">
//           <button className="createUser">Create User</button>
//           <button className="createUser">Show users</button>
//           <button className="createUser">getByWeek</button>
//           <button className="createUser">getByTopic</button>
//         </div>
//       </form>
//     );
//   }
// }
