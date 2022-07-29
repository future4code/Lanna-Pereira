import React, { useContext, useState } from "react";
import GlobalContext from "../global/globalContext";


const CartasCostas = () => {
    const {states, imagemFrente, imagemCosta} = useContext(GlobalContext)
    const [name, setName] = useState("")
    const [image, setImage] = useState("") 
    const [cartaVirada, setCartaVirada] = useState(false)
    const tarot = states.tarot
    const aleatorio = () => {
        const carta = Math.floor(Math.random()*5)
        setName(states.tarot.cards[carta].name)
        setImage(states.tarot.cards[carta].image)
        setCartaVirada(!false)
    }

    const mostrarImgCosta = tarot.cards.map((card)=>{
        return(
            <div>
                <div onClick={aleatorio}><img src={imagemCosta} alt="imagem costa"/></div> 
            </div>
        )
    })

    return(
        <div>
            {cartaVirada?
            <div>
                <button onClick={aleatorio}>{name}</button>
                <img src={imagemFrente + image} alt={image}/>
                </div>:<div>
                   {mostrarImgCosta}
                </div>
            
            }
        </div>
    )
}

export default CartasCostas;