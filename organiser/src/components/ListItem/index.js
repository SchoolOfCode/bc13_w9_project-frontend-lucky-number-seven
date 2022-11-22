function ListItem({ text, handleDelete }) {
  return (
    <div>
      <li>
        {text} {<button onClick={handleDelete}>delete</button>}
      </li>
    </div>
  );
}

export default ListItem;
