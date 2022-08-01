import React from "react";
import { useNavigate} from "react-router-dom"
import { goToEmbaralhar } from "../Router/Cordinator";
import styled from "styled-components";
import imgHome from "../img/imgHome.jpg"


const Container = styled.div`
    background-image:url(${imgHome});
    width: 100%;
    height: 95vh;
    color: lightblue;
    text-align: center;
`
const Botao = styled.button`
   border-radius: 15px;
   border: none;
   width: 30%;
   margin-bottom: 8px;
   &:hover{
      box-shadow: 1px 3px 3px gray;
   }
   &:active{
      background-color: darkgray;
   }
`

const Home = () => {
    const navigate = useNavigate()
    return(
        <Container>
            <div>
            <p>Bem Vinda(o) ao Jogo de Tarot</p>
            <p>Jogue a cartas e encontre a resposta para a sua questão!</p>

            <p>Como jogar</p>
            <p>Após iniciar o jogo, clique em "Embaralhar", escolha uma carta e seja feliz!</p>
            </div>
            
            <Botao onClick={()=>goToEmbaralhar(navigate)}> Jogar </Botao>
        </Container>
    )
}

export default Home