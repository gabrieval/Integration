import './App.css';
import Cards from './components/cards/Cards';
import SearchBar from './components/searchBar/SearchBar';
import characters from './data.js';

function App() {

function searchHandler (e){
   window.alert("El ID que estoy buscando")
}

function closeHandler(){
   window.alert('Emulamos que se cierra la card')
}

   return (
      <div className='App'>
         <img className="title" src="title.png"  alt= "logo"></img>
         <SearchBar onSearch={searchHandler} />
         <Cards characters={characters} onClose={closeHandler} />
      </div>
   );
}

export default App;
