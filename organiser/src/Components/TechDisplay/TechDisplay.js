//Plan
// test the api in postman DONE
//Import components, react stuff
// useEffect to fetch 
// create state 
//
import Input from './Input/Input';
import List from './List/List'
import {useState} from 'react'


export default function TechDisplay ({search}) {
    const [links, setLinks] = useState()

    return (
        <div>
            <Input/>
            <List/>

        </div>
      );
}
 
