import { useDispatch, useSelector } from "react-redux"
import Card from "../card/Card"
import styles from "./Favorites.module.css"
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

 export default function Favorites({onClose}) {


    const {myFavorites} = useSelector(state=>state)

    const [aux,setAux] = useState(false);
    const dispatch = useDispatch();
    const handleFilter = (e)=>{
      dispatch(filterCards(e.target.value))
      setAux(true)
    }
    const handleOrder = (e)=>{
      dispatch(orderCards(e.target.value))
    }
   
    return (
      <div>
      <select onChange={handleOrder}>
         <option value="AZ">Ascendente</option>
         <option value="ZA">Descendente</option>
      </select>
      <select  onChange={handleFilter}>
         <option value="AllCharacters">All Characters</option>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Genderless">Genderless</option>
         <option value="unknown">unknown</option>
      </select>
        <div className={styles.contenedor}>
            {
                myFavorites.map((personajes,index)=> 
                <Card
                key={index}
                id={personajes.id}
                name={personajes.name}
                status={personajes.status}
                species={personajes.species}
                gender={personajes.gender}
                origin={personajes.origin?.name}
                image={personajes.image}
                onClose={onClose}
                isFav = {true}
                />
            )
        }
       </div>  
      </div>
    )
 }

 