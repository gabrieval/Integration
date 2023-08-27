import { useNavigate } from "react-router-dom";
import style from "./card.module.css";


export default function Card(props) {
   const navigate = useNavigate();
   const { character, onClose } = props;
   const { image, name, species, gender, id } = character;

   function navigateHandler() {
      navigate(`/detail/${character.id} `)
   }


   return (
         <div className={style.cardContainer}>

            <button className={style.closeButton} onClick={() => onClose(character.id)}>X</button>
            <div className={style.imageContainer}>
               <img className={style.characterImage} src={image} alt={name} onClick={navigateHandler} />
               <h2 className={style.name}> {name}</h2>
               <button
                  className={style.closeButton}
                  onClick={() => onClose(id)}
                  >  x </button>
         </div>

         <div className={style.atributes}>
            <h2>{species}</h2>
         </div>
            <h2>{gender}</h2>
      </div >
   );
}
