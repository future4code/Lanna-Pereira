import React, { useContext, useState } from "react";
import GlobalContext from "../global/globalContext";
import styled from "styled-components";
import img1 from "../img/img1.jpg"


const ContainerPrincipal = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   height: 100%;
   flex-direction: row;
   background-color: beige;
   background-image: url(${img1})
   
`
const SubContainer = styled.div`
   display: grid;
   row-gap: 15px;
   column-gap: 15px;
   grid-template-rows: repeat(4,1fr);
   grid-template-columns: repeat(8, 1fr);
  
`

const Flip = styled.div`
    display: flex;
    justify-content: center;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
`

const CartasCostas = () => {
    const {states, imagemFrente, imagemCosta} = useContext(GlobalContext)
    const [image, setImage] = useState("") 
    const [cartaVirada, setCartaVirada] = useState(false)
    
    const tarot = states.tarot

    const aleatorio = () => {
        const carta = Math.floor(Math.random()*20)
        setImage(states.tarot.cards[carta].image)
        setCartaVirada(!false)
    }

    const mostrarImgCosta = tarot.cards.map((card)=>{
        return(
            <div onClick={aleatorio}>
                <img src={imagemCosta} alt="imagem costa"/>
            </div>
        )
    })

    return(
        <ContainerPrincipal> 
            {cartaVirada?
                <SubContainer>
                    <img src={imagemFrente + image} alt={image}/>
                </SubContainer>:<SubContainer>
                    {mostrarImgCosta}
                </SubContainer>
            }   
        </ContainerPrincipal>
    )
}

export default CartasCostas;