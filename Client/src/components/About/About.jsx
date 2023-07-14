import React from "react";
import style from "./About.module.css"


export default function About() {

    return (

    <div className={style.div}>
        <h1 className={style.h1}>Sobre mí </h1>
        <p className={style.p}>“¡Hola! Soy Sebastián y nací en Mar del Plata. Actualmente estoy estudiando programación en Henry y este es mi primer proyecto.¡Gracias por visitar mi aplicación!" </p>
    </div>
    )
}