import React, { useContext } from "react";
import GlobalContext from "../global/globalContext";


const CartasFrente = () => {
    const {states, imagemFrente} = useContext(GlobalContext)
    const tarot = states.tarot
    const carta = tarot.cards?tarot.cards.map((card) => {
        return(
            <div>
                <h2> {card.name}</h2>
                <img src={imagemFrente + card.image} alt ={card.image}/>
            </div>
        )
    })
    :<div>oi</div>
    console.log(carta)
    return<div>
            {carta}
        </div>
    
}

export default CartasFrente;