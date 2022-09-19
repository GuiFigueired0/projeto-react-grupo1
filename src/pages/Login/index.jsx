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

<div className='container-principal'>
        <h1>Login</h1>

        <div className='box-informacoes'>
          <form onSubmit= {handleSubmit}>
            
            <div className='nome'>
              <p>Nome:</p>
              <input required type= "text" name= "nome" placeholder= "Digite seu nome.." />
            </div>
            
            <div className='sobrenome'>
              <p>Sobrenome:</p>
              <input required type= "text" name= "sobrenome" placeholder= "Digite seu sobrenome.." />
            </div>
            
            <div className='email'>
              <p>Email:</p>
              <input required type= "text" name= "email" placeholder = "Digite seu email.." />
            </div>

            <div className='confimação-email'>
              <p>Confirmação email:</p>
              <input required type= "text" name= "confirmacaoemail" placeholder = "Confirme seu email.." />
            </div>
            
            <div className='senha'>
              <p>Senha:</p>
              <input required type= "password" name= "senha" placeholder = "Digite sua senha.." />
            </div>
            
            <div className='confimação-senha'>
              <p>Confirmação senha:</p>
              <input required type= "password" name= "confirmacaosenha" placeholder = "Confirme sua senha.." />
            </div>
            
            <button type= "submit">Enviar</button>

          </form>
        </div>
      </div>
        </Formik>
    );
    
  }