import "./ListItem.css";


// the `?` is a tenary operator that is being used which works similar to an if statement 

export default function ListItem({ topicList, weekList }) {
  return (
    <div className="listItemsSecondSection">
      {topicList?.map((topic, i) => (
     <li key={i}>{`${topic.week} ${topic.topic} ${topic.links}`}</li>)
     )}
      {weekList?.map((week, i) => (
          <li key={i}>
            {" "}
            <span>{week.week}</span>
            <span>{week.topic}</span>
            <span>{week.links}</span>
          </li>
        )
      )}
    </div>
    
  );
}
