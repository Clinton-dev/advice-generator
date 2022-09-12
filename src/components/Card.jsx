import { useState, useEffect } from 'react';
import desktopDivider from '../assets/pattern-divider-desktop.svg';
import mobileDivider from '../assets/pattern-divider-mobile.svg';
import iconDevice from '../assets/icon-dice.svg';
import './Card.css';


function Card() {
    const [advice, setAdvice] = useState({});

    const getAdvice = () => {
        // fetch advice
        fetch(`https://api.adviceslip.com/advice`)
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
    }

    const newAdvice = () => {
        getAdvice();
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
            <button className=' bg-NeonGreen p-4 rounded-full absolute -bottom-8 md:right-1/2 md:translate-x-6 sm:right-32 lg:translate-x-8 hover:drop-shadow-[0_0_25px_hsl(150, 100%, 66%)]' onClick={newAdvice}>
                <img src={iconDevice} alt=" icon image" />
            </button>
        </div>
    )
}

export default Card