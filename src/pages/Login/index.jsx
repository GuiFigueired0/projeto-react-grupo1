import React from 'react';


export function Login(){

  const handleSubmit = (e) =>{

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  };

    return (
        <form onSubmit= {handleSubmit}>
          <h1>Login</h1>
          <input type= "text" name= "nome" placeholder= "Digite seu nome.." />
          <input type= "text" name= "sobrenome" placeholder= "Digite seu sobrenome.." />
          <input type= "text" name= "email" placeholder = "Digite seu email.." />
          <input type= "text" name= "confirmacaoemail" placeholder = "Confirme seu email.." />
          <input type= "text" name= "senha" placeholder = "Digite sua senha.." />
          <input type= "text" name= "confirmacaosenha" placeholder = "Confirme sua senha.." />
          <button type= "submit">Enviar</button>


        </form>
    );

}