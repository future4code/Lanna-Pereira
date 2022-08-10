import React, { useContext } from "react";
import GlobalContext from "../global/globalContext";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
   width: 100%;
   height: 100%;
`
const SubContainer = styled.div`
   display: grid;
   row-gap: 15px;
   column-gap: 15px;
   grid-template-columns: repeat(8, 1fr);
`

const Imagem = styled.img`
    border-radius: 15px;
`
const Container4 = styled.div`
 &:hover{
    background-color: darkgrey;
    border-radius: 15px;
    align-items: center;
 }
`

const CartasFrente = () => {
    const {states, imagemFrente} = useContext(GlobalContext)
    const tarot = states.tarot
console.log(tarot)
    const carta = tarot.cards?
    tarot.cards.map((card) => {
        return(
            <Container4>
                <Imagem src={imagemFrente + card.image} alt ={card.image}/>
            </Container4>
        )
    })

    :""
    console.log(carta)

    return<div>
        <ContainerPrincipal>
                <SubContainer>
                    {carta}   
                </SubContainer>
        </ContainerPrincipal>
           
        </div>
    
}

export default CartasFrente;
