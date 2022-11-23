//Plan
// test the api in postman DONE
//Import components, react stuff
// create state 
//
import Input from './Input/Input';
import List from './List/List'
import {useState} from 'react'


export default function TechDisplay () {
    const [users, setUsers] = useState([]);

    function addUser(user) {
        setUsers([...users, user]);
      };
    
    



    return (
        <div>
            <Input/>
            <List/>

        </div>
      );
}
 
