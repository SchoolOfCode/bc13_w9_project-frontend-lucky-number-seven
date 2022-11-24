import ListItem from "../ListItem/ListItem";

export default function List({ topicList, weekList }) {
  return (
    <ul>
      <ListItem topicList={topicList} weekList={weekList} />
    </ul>
  );
}
