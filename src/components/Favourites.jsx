import React, { useState, useEffect } from 'react';

import './Favourites.css';

function Favourites() {
    const [favs, setFavs] = useState([]);

    useEffect(() => { getFavs() }, []);

    // get stored items in localStorage;
    const getFavs = () => {
        const advices = localStorage.getItem('favs');

        if (advices) {
            setFavs(JSON.parse(advices));
        } else {
            console.warn('favourites are empty');
        }
    }

    return (
        <div className='container mt-20 mx-auto p-4 bg-DarkGrayishBlue rounded-lg'>
            <h6 className='text-NeonGreen text-center mb-4'>Favourites</h6>
            <div className='flex flex-wrap justify-evenly  items-stretch space-x-2 space-y-4'>
                {favs.map((fav) => {
                    return (
                        <div className='text-center border mb-2 p-4 rounded-md w-full md:w-2/5 lg:w-1/4' key={fav.id}>
                            <p className="text-NeonGreen text-base mb-4">Advice #{fav.id}</p>
                            <p className="text-LightCyan">
                                <q>{fav.advice}</q>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Favourites