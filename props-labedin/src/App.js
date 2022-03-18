import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'



const PrincipalApp = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const ContainerPage = styled.div`
    width: 40vw;
    margin: 10px 0;
`;




function App() {
  return (
    <PrincipalApp>
      <ContainerPage>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fbnu3-1.fna.fbcdn.net/v/t39.30808-6/242130886_3000474900221756_3674127560830538165_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=lU4gfi0z9jgAX8tOvNQ&_nc_ht=scontent.fbnu3-1.fna&oh=00_AT-BIIj1jkGG_AXpnbbeIAPkz6NElZIJ5vyMKVUkGRjShA&oe=621A7F04" 
          nome="Lanna Brenda" 
          descricao="Oi, eu sou Lanna, tenho 22 anos e sou aluna na Labenu. Atualmente moro em Santa Catarina."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
          
        />
      </ContainerPage>

      <ContainerPage>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://autopecascomp.vteximg.com.br/arquivos/ids/164240-450-450/50102102-Bico-Injetor-Clio-206-Magneti-Marelli-501-021-02-2016-2015-2014-2013-2012-2011-2010-comp-1.jpg?v=636670108129300000" 
          nome="Texas Parts" 
          descricao="exercia a função de operadora de produção, na montagem de bico injetores de automoveis" 
        />
        
        <CardGrande 
          imagem="https://www.eletrolar.com/wp-content/uploads/2021/07/whirlpool23-1.jpg" 
          nome="Whirlpool" 
          descricao="exercia a função de operadora de produção, na montagem de geladeiras da marca consul e brastemp" 
        />
      </ContainerPage>

      <ContainerPage>
        <h2>Entre em contato</h2>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://www.mailbiz.com.br/wp-content/uploads/2014/07/emailmkt.png" 
          texto="Email" 
        />        
      </ContainerPage>
    </PrincipalApp>
  );
}

export default App;
