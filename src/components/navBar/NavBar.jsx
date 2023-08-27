
import SearchBar from '../searchBar/SearchBar';
import {Link} from 'react-router-dom';
// import "./navBar.css"
import styles from "./navBar.css";

export default function navBar ({onSearch, random}){
  return (<div className='nav-container'>
    <div>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
    </div>
    <SearchBar onSearch={onSearch}/> 
    <button className='random' onClick={random}>ADD RANDOM</button>
  </div>
  
  );
}
