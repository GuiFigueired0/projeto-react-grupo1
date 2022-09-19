import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


export function Login(){

  const handleSubmit = (e) =>{

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  };

  const validationSchema = yup.object({

    nome: yup
     .string()
     .required("Obrigatório"),

    sobrenome: yup
     .string()
     .required("Obrigatório"),
    
    email: yup
     .string()
     .email("Coloque um email válido")
     .required("Obrigatório"),

    confirmacaoemail: yup
     .string()
     .oneOf([yup.ref('email'),null], 'Emails não compatíveis')
     .required("Obrigatório"),

    senha: yup 
     .string()
     .min(8, "8 caracteres no mínimo!")
     .required("Obrigatório"),

    confirmacaosenha: yup
     .string()
     .oneOf([yup.ref('senha'),null], 'Senhas não compatíveis')
     .required("Obrigatório")

  });

    return (

      <Formik
      initialValues={{ email: "", nome: "", sobrenome: "", confirmacaoemail: "", senha: "", confirmacaosenha: ""}}
      validationSchema={validationSchema}
      >

        <form onSubmit= {handleSubmit}>
          <h1>Login</h1>
          <input type= "text" name= "nome" placeholder= "Digite seu nome.." />
          <input type= "text" name= "sobrenome" placeholder= "Digite seu sobrenome.." />
          <input type= "text" name= "email" placeholder = "Digite seu email.." />
          <input type= "text" name= "confirmacaoemail" placeholder = "Confirme seu email.." />
          <input type= "password" name= "senha" placeholder = "Digite sua senha.." />
          <input type= "password" name= "confirmacaosenha" placeholder = "Confirme sua senha.." />
          <button type= "submit">Enviar</button>


        </form>
        </Formik>
    );
    
  }