import React from "react";
import SearchBar from "./SearchBar";
import style from './navegador.module.css'
import { Link } from "react-router-dom";

export default function Nav(props) {
    
    return (
        <div className={style.Nav}>
            <div className={style.div2}>
                <div className={style.div3}>
                    <Link to='/about' className={style.button}>ABOUT link</Link>
                    <Link to='/home' className={style.button}>Home</Link>
                    <Link to='/favorites' className={style.button}>Favorites</Link>
                </div>
            </div>
            <h1 className={style.h1}>Rick and Morty</h1>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}