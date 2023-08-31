import './App.css';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from './views/detail/detail';
import About from './views/about/about';
import LandingPage from './views/landingPage/landingPage';
import Favorites from './views/favorites/favorites';
import { removeFavorite } from './redux/actions';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '1password';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert('Datos incorrectos')
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function searchHandler(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });

   }

   function closeHandler(id) {
      let deleted = characters.filter((char) => char.id !== Number(id));
      // setCharacters(deleted);//utilizar map dispatch to props-Extra de react-redux, agregar el removeFavorite()
   }

   function randomHandler() {
      let haveIt = [];
      let random = (Math.random() * 826).toFixed();

      random = Number(random);

      if (!haveIt.includes(random)) {
         haveIt.push(random);
         searchHandler(random);
      }
      else {
         console.log("Ya agregaste todos los personajes");
         return false;
      }
   }

   return (
      <div className='App'>
         <img className="title" src="title.png" alt="logo"></img>
         {location.pathname !== "/" && <NavBar onSearch={searchHandler} random={randomHandler} />}


         <Routes>
            <Route path="/" element={<LandingPage login={login} />} />

            <Route path="/home"
               element={<Cards characters={characters} onClose={closeHandler} />}
            />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />


            <Route path="/favorites" element={<favorites />} />
            <Route path="*" element={<errorPage />} />
         </Routes>
      </div>
   );
}

export default App;
