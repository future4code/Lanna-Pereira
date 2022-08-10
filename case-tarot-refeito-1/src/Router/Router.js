import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Embaralhar from "../page/Embaralhar"
import Home from "../page/Home"



const Router = () => {
    return(

    <BrowserRouter>
    <Routes>
      <Route path="/embaralhar" element={<Embaralhar/>}/>
        
      <Route path="/" element={<Home/>}/>

    </Routes>
  </BrowserRouter>
    )
}

export default Router