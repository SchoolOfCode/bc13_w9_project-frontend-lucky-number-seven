//Plan
// test the api in postman DONE
//Import components, react stuff
// useEffect to fetch
// create state
//
import "./TechDisplay.css";
import Input from "./Input/Input";
import List from "./List/List";
import { useState, useEffect } from "react";
// import { getUsers } from "../../../../../../Backend/bc13_w9_project-backend-lucky-number-seven/backend/models/sqlModels";
const url = "http://localhost:3000";

export default function TechDisplay() {
  const [user, setUser] = useState([]);
  // useEffect(() => {
  async function getUsers() {
    const response = await fetch(`${url}/api/sqlRoutes`);
    const data = await response.json();

    // console.log(data);
    setUser(data.payload);
  }
  // getUsers()
  //   }, []);
  console.log(user);

  return (
    <div className="techDisplay">
      <Input />
      <List />
      <button onClick={getUsers}>I am BUTTON</button>

      {user.map((user) => {
        return <p> {user.user_firstname}</p>;
      })}
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
