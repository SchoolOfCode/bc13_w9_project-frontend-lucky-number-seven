import "./index.css"

function ListItem({text, handleDelete}) {
  return (
    <div className="listAndDeleteButton">
      <li className="list"> 
      {text} 
      </li>
      <button className="deleteButton" onClick={handleDelete}>x</button>
    </div>
  );
}

export default ListItem;
