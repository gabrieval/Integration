import style from "./card.module.css"

export default function Card(props) {
   const { character, onClose } = props;
   return (
      <div className ={style.cardContainer}>

         <button className= {style.closeButton} onClick={()=>onClose(character.id)}>X</button>
         <div className={style.imageContainer}>
            <img className= {style.characterImage} src={character.image} alt={character.name} />
            <h2 className={style.name}> {character.name}</h2>
         </div>

         <div className= {style.atributes}>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         </div>
      </div>
   );
}
