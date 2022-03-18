import './App.css';
import React from 'react';


function App() {
  const titulo = "Titulo do video";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}
  function login(){
    alert("Você está logado!")
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>VanillaTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
            <button className='botao-login' onClick={login}>Login</button>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/s1kwS3riCQI/maxresdefault.jpg" alt=""/>
                    <h4>{ titulo }</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/Fc-fa6cAe2c/maxresdefault.jpg" alt=""></img>
                    <h4>{ titulo }</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/-OfOkiVFmhM/maxresdefault.jpg" alt=""/>
                    <h4>{ titulo }</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{ titulo }</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{ titulo }</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{ titulo }</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{ titulo }</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{ titulo }</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Maratone seus videos!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
