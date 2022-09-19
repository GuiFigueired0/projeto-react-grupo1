import React from 'react';
import './styles.css';
import { Formik, Field, ErrorMessage } from "formik";
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
     .required("Campo obrigatório!"),

    sobrenome: yup
     .string()
     .required("Campo obrigatório!"),
    
    email: yup
     .string()
     .email("Coloque um email válido")
     .required("Campo obrigatório!"),

    confirmacaoemail: yup
     .string()
     .oneOf([yup.ref('email'),null], 'Emails não compatíveis')
     .required("Campo obrigatório!"),

    senha: yup 
     .string()
     .min(8, "8 caracteres no mínimo!")
     .required("Campo obrigatório!"),

    confirmacaosenha: yup
     .string()
     .oneOf([yup.ref('senha'),null], 'Senhas não compatíveis')
     .required("Campo obrigatório!")

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
            
            <div className='nome aldiv'>
              <p>Nome:</p>
              <Field type= "text" name= "nome" placeholder= "Digite seu nome.." />
              <ErrorMessage component="div" name="nome" />
            </div>
            
            <div className='sobrenome'>
              <p>Sobrenome:</p>
              <Field type= "text" name= "sobrenome" placeholder= "Digite seu sobrenome.." />
              <ErrorMessage component="div" name="sobrenome" />
            </div>
            
            <div className='email'>
              <p>Email:</p>
              <Field type= "text" name= "email" placeholder = "Digite seu email.." />
              <ErrorMessage component="div" name="email" />
            </div>

            <div className='confimação-email'>
              <p>Confirmação email:</p>
              <Field type= "text" name= "confirmacaoemail" placeholder = "Confirme seu email.." />
              <ErrorMessage component="div" name="confirmacaoemail" />
            </div>
            
            <div className='senha aldiv'>
              <p>Senha:</p>
              <Field type= "password" name= "senha" placeholder = "Digite sua senha.." />
              <ErrorMessage component="div" name="senha" />
            </div>
            
            <div className='confimação-senha'>
              <p>Confirmação senha:</p>
              <Field type= "password" name= "confirmacaosenha" placeholder = "Confirme sua senha.." />
              <ErrorMessage component="div" name="confirmacaosenha" />
             
            </div>
            
            <button type= "submit">Enviar</button>

          </form>
        </div>
      </div>
        </Formik>
    );
    
  }