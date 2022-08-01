import React, { useEffect, useState } from "react"
import GlobalContext from "./globalContext"



const GlobalState = ({children}) => {
    const [tarot,setTarot] = useState([])

    useEffect(()=> {
        getTarot()
    },[])

    const getTarot = () => {
        fetch('./tarot.json')
        .then(response => response.json())
        .then((cards) => {
            setTarot(cards)
        }).catch((error) =>{
            console.log(error)
        })
    }
    
    const imagemFrente = tarot.imagesUrl
    const imagemCosta = tarot.imageBackCard

    const states = {tarot}
    const setteres = {setTarot}
    const request = {getTarot}

    const data = {states, setteres, request, imagemFrente, imagemCosta}

    console.log(data)

    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState