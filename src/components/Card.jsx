import mobileDivider from '../assets/pattern-divider-mobile.svg';
import iconDevice from '../assets/icon-dice.svg';
import { useState, useEffect } from 'react';


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
        <div className='container my-16 mx-auto text-center p-4 bg-DarkGrayishBlue rounded-lg relative'>
            <p className="text-NeonGreen text-base mb-4">Advice #{advice.id}</p>
            <p className="text-LightCyan">
                <q>{advice.advice}</q>
            </p>
            {/* mobile divider */}
            <div className='hidden mt-6 mb-10 sm:block'>
                <img className="w-full" src={mobileDivider} alt="divider svg" />
            </div>
            <button className=' bg-NeonGreen p-4 rounded-full absolute sm:right-32 -bottom-8 ' onClick={newAdvice}>
                <img src={iconDevice} alt=" icon image" />
            </button>
        </div>
    )
}

export default Card