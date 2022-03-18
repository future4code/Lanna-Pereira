import React from 'react';
import styled from 'styled-components'

const ButtonContainer = styled.div `
display: flex;
align-items: center;
border: 1px solid rgb(241, 65, 65);
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;
:hover{
    background-color: lightgrey;
}
`;

const ButtonImg = styled.img `
width: 30px;
margin-right: 10px;

`;



function ImagemButton(props) {
    return (
        <ButtonContainer>
            <ButtonImg src={ props.imagem }/>
            <h5>{ props.texto }</h5>
        </ButtonContainer>

    )
}

export default ImagemButton;