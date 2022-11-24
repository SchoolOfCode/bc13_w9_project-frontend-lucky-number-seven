import "./ListItem.css";

export default function ListItem({ topicList, weekList }) {
  return (
    <div className="listItemsSecondSection">
      {topicList?.map((topic, i) => {
        return <li key={i}>{`${topic.week} ${topic.topic} ${topic.links}`}</li>;
      })}
      {weekList?.map((week, i) => {
        return (
          <li key={i}>
            {" "}
            <span>{week.week}</span>
            <span>{week.topic}</span>
            <span>{week.links}</span>
          </li>
        );
      })}
    </div>
    /* 
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
