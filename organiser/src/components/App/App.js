import './App.css';
import List from '../List';
import Input from '../Input';


function App() {
  return (
    <div className="App">
    <div className="toDoContainer">
      <h1>Today, you aim at achieving the following: </h1>
      <Input />
      <List />
      </div>
    </div>
  );
}

export default App;
