function ListItem({text, handleDelete}) {
  return (
    <div>
      <li>
      {text} <button onClick={handleDelete}>x</button>
      </li>
    </div>
  );
}

export default ListItem;
