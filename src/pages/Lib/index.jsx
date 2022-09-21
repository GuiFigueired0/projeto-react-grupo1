import React from 'react';
import './style.css';
// import { Field } from "formik";

export function Lib(){
    return (
        

    <div className='header'>
        <img src='./Images/logo-pequena.png' alt='logo principal' height='60px'></img>
        <input className='searchBar' type="text" placeholder= "O que você quer ouvir?"/>
        {/* <Field type= "text" name= "search" placeholder= "O que você quer ouvir" /> */}
    </div>
   
    )
}