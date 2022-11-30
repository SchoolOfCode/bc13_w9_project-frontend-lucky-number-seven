import "./index.css"
import ListItem from "../ListItem";

// toDos and handleDelete are props that are being handed to the List function 
// this is returning and ordered list 
// using the map array which iterates over the toDos
// index parameter is connected to the key parameter 
// text will be passed down to the ListItem function which again takes it in as a prop

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
