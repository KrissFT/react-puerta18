import React from "react";
import { Link, Route, Routes } from 'react-router-dom'

import styles from "./css/Enlaces.module.css"

function Enlaces(){
    return(
        <>
            <Link to="/" className={styles.enlace}>Home</Link>
            <Link to="/listado-1" className={styles.enlace}>Lista 1</Link>
            <Link to="/listado-2" className={styles.enlace}>Lista 2</Link>
        </>
        
    )
    
}

export default Enlaces;