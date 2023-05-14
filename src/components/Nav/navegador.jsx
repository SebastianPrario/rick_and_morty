import React from "react";
import SearchBar from "./SearchBar";
import style from './navegador.module.css'


export default function Nav(props) {
    
    return (
     <div className={style.Nav}>
        <h1 className={style.h1}>Rick and Morty</h1>
     <SearchBar onSearch={props.onSearch}/>
    </div>
    )
}