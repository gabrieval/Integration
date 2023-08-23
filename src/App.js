import './App.css';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/NavBar';
import characters from './data.js';
import { useState } from 'react';
import axios from 'axios';



function App() {
const [characters, setCharacters]= useState([]);
function searchHandler (id){
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   
}

function closeHandler(id){
   let deleted = characters.filter((char) => char.id !== Number(id));
   setCharacters(deleted);
}

function randomHandler(){
   let haveIt = [];
   let random = (Math.random() * 826).toFixed();

   random = Number(random);

   if(!haveIt.includes(random)){
      haveIt.push(random);
      searchHandler(random);
   }
   else{
      console.log("Ya agregaste todos los personajes");
      return false;
   }
}

   return (
      <div className='App'>
         <img className="title" src="title.png"  alt= "logo"></img>
        <NavBar onSearch ={searchHandler} random={randomHandler}/>
         <Cards characters={characters} onClose={closeHandler} />
      </div>
   );
}

export default App;
