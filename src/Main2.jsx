import React from "react";
import { Route, Routes } from 'react-router-dom'

import Banner from "./Banner"
import Listado from "./Listado"
import Listado2 from "./Listado2";

function Main2(){
    return(
        <>
            <Banner></Banner>
            <Routes>
                <Route path="/listado-1" exact={true} Component={Listado}></Route>
                <Route path="/listado-2" exact={true} Component={Listado2}></Route>
            </Routes>
        </>
    )
}

export default Main2