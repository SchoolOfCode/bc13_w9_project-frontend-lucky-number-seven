import ListItem from "../ListItem";

function List({ toDos, handleDelete }) {
  return (
    <ol>
      {toDos.map((todo, i) => (
        <ListItem
          key={i}
          text={todo}
          handleDelete={() => {
            handleDelete(i);
          }}
        />
      ))}
    </ol>
  );
}

export default List;
