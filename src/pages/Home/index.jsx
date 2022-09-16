import React from 'react';

import * as Styled from './styles'
import './style.css';

function Home(){
    return (

        <div className='container-home'>

            <div className='header'>
                    <img src='./Images/logo-pequena.png' alt='logo principal' height='60px'></img>

                    <button /*className='button' onClick={onClick} disabled={disabled}*/>
                        Login
                    </button>

                    <button>
                        Sign up
                    </button>
            </div>    

            <Styled.Wrapper>

                <div className='logo'>
                    <img src='./Images/logo-grande.png' alt='logo principal' width='825px'></img>
                </div>

            </Styled.Wrapper>
            
            
            <div className='albuns-home'>

                <img src='./Images/titulo-albuns.png' alt='titulo albuns' width='100%'></img>

                <img src='./Images/album-1.png' alt='Album 1' width='205px' ></img>
                <img src='./Images/album-2.png' alt='Album 2' width='205px' ></img>
                <img src='./Images/album-3.png' alt='Album 3' width='205px' ></img>
                <img src='./Images/album-4.png' alt='Album 4' width='205px' ></img>
                <img src='./Images/album-5.png' alt='Album 5' width='205px' ></img>
                <img src='./Images/album-6.png' alt='Album 6' width='205px' ></img>
                <img src='./Images/album-7.jpg' alt='Album 7' width='205px' ></img>
                <img src='./Images/album-8.jpg' alt='Album 8' width='205px' ></img>
                <img src='./Images/album-9.png' alt='Album 9' width='205px' ></img>
                <img src='./Images/album-10.jpeg' alt='Album 10' width='205px' ></img>
            </div>

            <idv className='final-home'>
                <img src='./Images/Girl-Listening-Music.png' alt='Moça' width='600px'></img>
            </idv>

        </div>

    );
}

export default Home;