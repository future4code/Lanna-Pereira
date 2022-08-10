import React, { useContext, useState } from "react";
import GlobalContext from "../global/globalContext";
import styled from "styled-components";


const ContainerPrincipal2 = styled.div`
   width:100%;
   height: 100%;   
   border-radius: 15px;
`
const SubContainer = styled.div`
   display: grid;
   row-gap: 15px;
   column-gap: 15px;
   grid-template-columns: repeat(8, 1fr);
  
`
const Container3 = styled.div`
 &:hover{
    background-color: darkgrey;
    border-radius: 15px;
    align-items: center;
 }
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
            <Container3 onClick={aleatorio}>
                <img src={imagemCosta} alt="imagem costa"/>
            </Container3>
        )
    })

    return(
        <ContainerPrincipal2> 
            {cartaVirada? 
                <SubContainer>
                    <img src={imagemFrente + image} alt={image}/>
                </SubContainer>:<SubContainer>
                    {mostrarImgCosta}
                </SubContainer>
            }   
        </ContainerPrincipal2>
    )
}

export default CartasCostas;
