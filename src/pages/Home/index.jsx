import React from 'react';

function Home(){
    return (

        <div className='conterner-home'>

            <div className='header-home'>


                <button /*className='button' onClick={onClick} disabled={disabled}*/>
                    Login
                </button>

                <button>
                    Sign up
                </button>

            </div>

            <div className='logo'>
                <img url='Images/logo-grande.png' alt='Logo grande'></img>
            </div>

            <div className='albuns-home'>
                <h2>Encontre os melhores albuns só aqui!</h2>

                <img url='' alt='Album 1'></img>
                <img url='' alt='Album 2'></img>
                <img url='' alt='Album 3'></img>
                <img url='' alt='Album 4'></img>
                <img url='' alt='Album 5'></img>
                <img url='' alt='Album 6'></img>
                <img url='' alt='Album 7'></img>
                <img url='' alt='Album 8'></img>
                <img url='' alt='Album 9'></img>
                <img url='' alt='Album 10'></img>
            </div>

            <idv className='final-home'>
            <img url='' alt='Moça'></img>
            </idv>

        </div>

    );
}

export default Home;