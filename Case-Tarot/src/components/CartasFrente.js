import React, { useContext } from "react";
import GlobalContext from "../global/globalContext";
import styled from "styled-components";
import img1 from "../img/img1.jpg"

const ContainerPrincipal = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: row;
   background-color: beige;
   background-image: url(${img1});
`
const SubContainer = styled.div`
   display: grid;
   row-gap: 15px;
   column-gap: 15px;
   grid-template-rows: repeat(4,1fr);
   grid-template-columns: repeat(8, 1fr);
 

`

const Imagem = styled.img`
    border-radius: 15px;
`

const CartasFrente = () => {
    const {states, imagemFrente} = useContext(GlobalContext)
    const tarot = states.tarot
console.log(tarot)
    const carta = tarot.cards?
    tarot.cards.map((card) => {
        return(
            <div>
                <Imagem src={imagemFrente + card.image} alt ={card.image}/>
            </div>
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