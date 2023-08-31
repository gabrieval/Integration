export const ADD_FAV= "ADD-FAV"
export const REMOVE_FAV= "REMOVE-FAV"

export function addFavorite (character){
    return{
        type:ADD_FAV,
        payload:character
    }
}
export function removeFavorite (id){
    return {
        type:REMOVE_FAV,
        payload:id,
    }
}