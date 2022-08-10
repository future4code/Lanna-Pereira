import React from "react";
import { useNavigate} from "react-router-dom"
import { goToEmbaralhar } from "../Router/Cordinator";

const Home = () => {
    const navigate = useNavigate()
    return(
        <div>
            <p>VC quer iniciar?</p>
            <p>...</p>
            <button onClick={()=>goToEmbaralhar(navigate)}> Jogar </button>
        </div>
    )
}

export default Home