import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


export function Login(){

  const handleSubmit = (e) =>{

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  };

    return (
        <form onSubmit= {handleSubmit}>
          <h1>Login</h1>
          <input required type= "text" name= "nome" placeholder= "Digite seu nome.." />
          <input required type= "text" name= "sobrenome" placeholder= "Digite seu sobrenome.." />
          <input required type= "text" name= "email" placeholder = "Digite seu email.." />
          <input required type= "text" name= "confirmacaoemail" placeholder = "Confirme seu email.." />
          <input required type= "password" name= "senha" placeholder = "Digite sua senha.." />
          <input required type= "password" name= "confirmacaosenha" placeholder = "Confirme sua senha.." />
          <button type= "submit">Enviar</button>


        </form>
    );

}