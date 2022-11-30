import "./index.css";


// text and handleDelete are props that are handed to the function 
// className is used to identify the element when styling 
// 


function ListItem({ text, handleDelete }) {
  return (
    <div className="listAndDeleteButton">
      <li className="list">{text}</li>
      <button className="deleteButton" onClick={handleDelete}>
        x
      </button>
    </div>
  );
}

export default ListItem;
