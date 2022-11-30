import ListItem from "../ListItem/ListItem";


// props are being passed down from parent component TechDisplay.js and deconstructed and used in List function 
export default function List({ topicList, weekList }) {
  return (
    <ul className="tech-ul">
      <ListItem topicList={topicList} weekList={weekList} />
    </ul>
  );
}
