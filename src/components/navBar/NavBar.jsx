
import SearchBar from '../searchBar/SearchBar'
import "./navBar.css"
export default function navBar ({onSearch, random}){
  return (<div className='nav-container'>
    <SearchBar onSearch={onSearch}/> 
    <button className='random' onClick={random}>ADD RANDOM</button>
  </div>
  );
}
