import React,{useState} from "react";
import CartasCostas from "../components/CartasCostas";
import CartasFrente from "../components/CartasFrente";
import styled from "styled-components";



const ContainerPrincipal = styled.div`
   display: flex;
   width: 100%;
   height: 100%;

   justify-content: center;
   background-color: beige;
   
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
const MainDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content:center;
`

const Embaralhar = () => {
    const [embaralhar, setEmbaralhar] = useState([true])

    const mudarBotao = () => {
        setEmbaralhar(!embaralhar)
    }

  return(
     <MainDiv>
           <Botao onClick={mudarBotao}> {embaralhar?<p>embaralhar</p>:<p>jogar novamente</p>}</Botao>
           <ContainerPrincipal>
              {embaralhar ? <CartasFrente/> : <CartasCostas/>}
           </ContainerPrincipal>
      </MainDiv>
        );
};

export default Embaralhar;
