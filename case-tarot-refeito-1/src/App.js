import React from "react";
import GlobalState from "./global/globalState";
//import Embaralhar from "./page/Embaralhar";
import Router from "./Router/Router";


const App = () => {

    return (
        <GlobalState>
            <Router/>
        </GlobalState>
    );
  }

export default App;
