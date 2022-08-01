import React from "react";
import { useNavigate} from "react-router-dom"
import { goToEmbaralhar } from "../Router/Cordinator";
import styled from "styled-components";
import imgHome from "../img/imgHome.jpg"


const Container = styled.div`
    background-image:url(${imgHome});
    width: 100%;
    height: 95vh;
    color: lightgray;
    text-align: center;
    font-size: large;
`
const Botao = styled.button`
   border-radius: 15px;
   border: none;
   width: 30%;
   height:6%;
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
            <p>Seja Bem Vindx ao Jogo de Tarot</p>
            <p>Jogue a cartas e encontre a resposta para a sua questão!</p>

            <p>Como jogar</p>
            <p>Após iniciar o jogo, clique em "Embaralhar".</p>
            <p>escolha uma carta e descubra o que o futuro lhe aguarda.</p>
            </div>
            
            <Botao onClick={()=>goToEmbaralhar(navigate)}> Jogar </Botao>
        </Container>
    )
}

export default Home;