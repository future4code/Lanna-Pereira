import React,{useState} from "react";
import CartasCostas from "../components/CartasCostas";
// import CartasFrente from "../components/CartasFrente";

const Embaralhar = () => {
    const [embaralhar, setEmbaralhar] = useState([true])
    const mudarBotao = () => {
        setEmbaralhar(!embaralhar)
    }

    console.log(embaralhar)
  return(
     <div>
        <p>embaralhando...</p>
           <button onClick={mudarBotao}> {embaralhar?<p>embaralhar</p>:<p>jogar novamente</p>}</button>
           <div>
              <CartasCostas/>
           </div>
            </div>
        );
};

export default Embaralhar;

// {embaralhar?<CartasFrente/>:<CartasCostas/>}