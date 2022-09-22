import React from 'react';
import './styleLib.css';

export function Lib(){
    return (
        
    <>
        <header className='mainHeader'>
            <img src='./Images/logo-pequena.png' alt='logo principal' height='60px'></img>
            <input className='searchBar' type="text" placeholder= "O que você quer ouvir?"/>
        </header>
        <div className='libraryContent'>
            <h1 className='mainTitle'>Sua Biblioteca:</h1>
            <div className='playlist'>
                <img className='firstPlaylist' src="./Images/disc.jpeg" alt="Imagem de um disco de vinil" />
                <h2 className='playlistTitle'>Nome da Musica</h2>
                <a className='music' href="">Musica 1...</a>
                <a className='music' href="">Musica 2...</a>
                <a className='music' href="">Musica 3...</a>
            </div>
            <div className='playlist'>
                <img className='firstPlaylist' src="./Images/disc.jpeg" alt="Imagem de um disco de vinil" />
                <h2 className='playlistTitle'>Nome da Musica</h2>
                <a className='music' href="">Musica 1...</a>
                <a className='music' href="">Musica 2...</a>
                <a className='music' href="">Musica 3...</a>
            </div>
            <div className='playlist'>
                <img className='firstPlaylist' src="./Images/disc.jpeg" alt="Imagem de um disco de vinil" />
                <h2 className='playlistTitle'>Nome da Musica</h2>
                <a className='music' href="">Musica 1...</a>
                <a className='music' href="">Musica 2...</a>
                <a className='music' href="">Musica 3...</a>
            </div>
        </div>
    </>
    )
}