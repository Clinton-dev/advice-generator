import { useState, useEffect } from 'react';
import desktopDivider from '../assets/pattern-divider-desktop.svg';
import mobileDivider from '../assets/pattern-divider-mobile.svg';
import iconDevice from '../assets/icon-dice.svg';
import favIcon from '../assets/star-fill.svg';
import './Card.css';


function Card() {
    const [advice, setAdvice] = useState({});
    const [favourites, setFavourites] = useState([]);

    const getAdvice = () => {
        // fetch advice
        fetch(`https://api.adviceslip.com/advice`)
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
    }

    const newAdvice = () => {
        getAdvice();
    }

    const addFavourites = () => {
        setFavourites(prev => [...prev, advice]);
        localStorage.setItem('favs', JSON.stringify(favourites))
    }

    useEffect(() => {
        getAdvice();
    }, []);
    return (
        <div className='container mt-20 mx-auto text-center p-4 bg-DarkGrayishBlue rounded-lg relative md:w-2/3 md:p-6 lg:w-1/3 lg:p-8'>
            <p className="text-NeonGreen text-base mb-4">Advice #{advice.id}</p>
            <p className="text-LightCyan">
                <q>{advice.advice}</q>
            </p>
            {/* mobile divider */}
            <div className='hidden mt-6 mb-10 sm:block'>
                <img className="w-full" src={mobileDivider} alt="divider svg" />
            </div>
            {/* desktop divider */}
            <div className='block mt-6 mb-10 sm:hidden'>
                <img className="w-full" src={desktopDivider} alt="divider svg" />
            </div>
            <div id="icons" className='absolute -bottom-8 right-[80px]'>
                <button className='mr-4 bg-NeonGreen p-4 rounded-full  hover:drop-shadow-[0_0_25px_hsl(150, 100%, 66%)]' onClick={addFavourites}>
                    <img className="w-6 h-6 text-white" src={favIcon} alt=" icon image" />
                </button>

                <button className=' bg-NeonGreen p-4 rounded-full  hover:drop-shadow-[0_0_25px_hsl(150, 100%, 66%)]' onClick={newAdvice}>
                    <img src={iconDevice} alt=" icon image" />
                </button>
            </div>
        </div>
    )
}

export default Card