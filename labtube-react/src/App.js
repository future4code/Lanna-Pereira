import React from "react";
import "./style.css";

export default function App(){
  const video = "Titulo do video";

  function playVideo() {
    alert ("Seu video está sendo reproduzido");
  }

  return(
    <div>
      <div className="tela">
        <header>
          <h1> Labetube </h1>
          <input type="text" placeholder="Search" id="searchSpace"/>
        </header>

        <main>
          <nav className="menu-lateral">
            <ul>
              <li className="botoes-menu-lateral">Inicio</li>
              <li className="botoes-menu-lateral">Em Alta</li>
              <li className="botoes-menu-lateral">Inscrições</li>
              <hr/>
              <li className="botoes-menu-lateral">Originais</li>
              <li className="botoes-menu-lateral">Histórico</li>
            </ul>
          </nav>

          <section className="lista-de-videos">

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://i.ytimg.com/vi/s1kwS3riCQI/maxresdefault.jpg" alt="I'm a bitch -hwasa"/>
              <h4>{"Hwasa - I'm a bitch"} </h4>
            </div>

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://i.ytimg.com/vi/Fc-fa6cAe2c/maxresdefault.jpg" alt=""/>
              <h4>{"Mmmh - Kai"} </h4>
            </div>

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://i.ytimg.com/vi/-OfOkiVFmhM/maxresdefault.jpg" alt=""/>
              <h4>{"Want - Taemin"} </h4>
            </div>

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://static.wikia.nocookie.net/thelostplanet/images/2/23/Maxresdefault_jhg.jpg/revision/latest?cb=20210202023354" alt=""/>
              <h4>{"Monster - EXO"} </h4>
            </div>

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://i.ytimg.com/vi/r1afdZk0qcI/maxresdefault.jpg" alt=""/>
              <h4>{"Dramarama - Monsta X"} </h4>
            </div>

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://i.ytimg.com/vi/Z7yNvMzz2zg/maxresdefault.jpg" alt=""/>
              <h4>{"Psycho - Red Velvet"} </h4>
            </div>

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://i.ytimg.com/vi/om3n2ni8luE/maxresdefault.jpg" alt=""/>
              <h4>{"Oh my God - ((G)Idle)"} </h4>
            </div>

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://i.ytimg.com/vi/YPFIh0dfYfw/maxresdefault.jpg" alt=""/>
              <h4>{"Stay tonight - ChungHa"} </h4>
            </div>

            <div className="lista-principal-videos" onClick="reproduzVideo">
              <img src="https://i.ytimg.com/vi/migtjEcIxnk/maxresdefault.jpg" alt=""/>
              <h4>{"Demente - ChungHa"} </h4>
            </div>
           
          </section>
        </main>

        <footer>
          <h4> Maratone seus videos!</h4>
        </footer>
      </div>
    </div>
  )
}