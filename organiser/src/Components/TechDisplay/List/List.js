import ListItem from "../ListItem/ListItem";

export default function List({ topicList }) {
  return (
    <ul>
      <ListItem topicList={topicList} />
    </ul>
  );
}
