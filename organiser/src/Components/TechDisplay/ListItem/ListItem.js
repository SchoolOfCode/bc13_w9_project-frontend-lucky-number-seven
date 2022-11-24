import "./ListItem.css";

export default function ListItem({ topicList, weekList, get }) {
  return (
    <div className="listItemsSecondSection">
<<<<<<< HEAD
      <li>
        first name and surname : <span>I am the week </span>
        <span >I am the topic</span> <span> I am the link</span>
      </li>
=======
      {topicList?.map((topic) => {
        return <li>{`${topic.week} ${topic.topic} ${topic.links}`}</li>;
      })}
      {weekList?.map((week) => {
        return (
          <p> {`${week.week}${"      "} ${week.topic}${" "}${week.links}`}</p>
        );
      })}
    </div>
    /* 
>>>>>>> button
      <li>
        first name and surname : <span>I am the week </span>
        <span>I am the topic</span> <span> I am the link</span>
      </li>
      <li>
        first name and surname :<span>I am the week </span>
        <span>I am the topic</span> <span> I am the link</span>
      </li>
      <li>
        first name and surname : <span>I am the week </span>
        <span>I am the topic</span> <span> I am the link</span>
      </li> */
  );
}
