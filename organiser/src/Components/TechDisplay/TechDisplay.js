//Plan
// test the api in postman DONE
//Import components, react stuff
// useEffect to fetch 
// create state 
//
import "./TechDisplay.css"
import Input from './Input/Input';
import List from './List/List'
import {useState, useEffect} from 'react'
const url = "http://localhost:3000";




export default function TechDisplay () {
   const [user, setUser] = useState({})
    useEffect(() => {
        async function getUsers() {
          const response = await fetch(`${url}/api/sqlRoutes`);
          const data = await response.json();
          const user = {
                firstName: data.user_firstname,
                secondName: data.user_surname,
          };
        console.log(data);
        setUser(user)
    }
    getUsers()
      }, []);

    return (
        <div className="techDisplay">
            <Input/>
            <List/>
            <p>{user.firstName}</p>
            <p>{user.secondName}</p>

        </div>
      );
}
 


///pokemons


// function PokemonViewer({ id }) {
//   const [pokemon, setPokemon] = useState({});

//   useEffect(() => {
//     async function getPokemons(id) {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       const data = await response.json();
//       const pokemon = {
//         name: data.name,
//         image: data.sprites.front_default,
//       };
//       setPokemon(pokemon);
//     }

//     if (!id) return;

//     getPokemons(id);

//     // data.name = name
//     // data.sprite.front_default = image
//   }, [id]);
//   // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
//   // HINT: you will need useState and useEffect!
//   return (
//     <div className="pokemon-viewer">
//       <p>{pokemon.name}</p>
//       <img src={pokemon.image} alt="pokemon character"></img>
//     </div>
//   );
// }

// export default PokemonViewer;
