import React, { useState } from "react"
import GlobalContext from "./globalContext"

const GlobalState = ({children}) => {
    const [tarot,setTarot] = useState([])

    const getTarot = () => {
        
        fetch('./tarot.json').then((res) =>{
            console.log(res)
         res.json()
        }).then((cards) => {
            console.log(cards)
            setCartaTarot(cards)
            
        }).catch((error) =>{
            console.log(error)
        })
    }
    
    const imagemFrente = cartaTarot.imagesUrl
    const imagemCosta = cartaTarot.imageBackCard

    const states = {cartaTarot}
    const setteres = {setCartaTarot}
    const request = {getTarot}

    const data = {states, setteres, request, imagemFrente, imagemCosta}

    

    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState