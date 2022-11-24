import "./ListItem.css";

export default function ListItem({ topicList }) {
  return (
    <div className="listItemsSecondSection">
      {topicList?.map((topic) => {
        return <li>{`${topic.week} ${topic.topic} ${topic.links}`}</li>;
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
