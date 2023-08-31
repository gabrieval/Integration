
import { connect } from 'react-redux';
import Cards from '../../components/cards/Cards';


function Favorites({ favorites }) {
    return (
        <div>
            <Cards characters={favorites}/>
        
        </div>);
}
const mapStatePorps = (state) => {
    return {
        favorites: state.myFavorites
    }
}

export default connect(mapStatePorps, null)(Favorites);