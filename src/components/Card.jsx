import mobileDivider from '../assets/pattern-divider-mobile.svg';
import iconDevice from '../assets/icon-dice.svg';


function Card() {

    const advice = () => {
        // fetch advice
    }

    return (
        <div className='container my-16 mx-auto text-center p-4 bg-DarkGrayishBlue rounded-lg relative'>
            <p className="text-NeonGreen text-base mb-4">Advice #117</p>
            <p className="text-LightCyan">
                <q>Its easy to sit up and take notice, what's difficult is getting up and tacking action</q>
            </p>
            {/* mobile divider */}
            <div className='hidden mt-6 mb-10 sm:block'>
                <img className="w-full" src={mobileDivider} alt="divider svg" />
            </div>
            <button className=' bg-NeonGreen p-4 rounded-full absolute sm:right-32 -bottom-8 '>
                <img src={iconDevice} alt=" icon image" />
            </button>
        </div>
    )
}

export default Card