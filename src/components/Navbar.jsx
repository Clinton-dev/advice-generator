import React from 'react';
import { BiStar, BiHome } from "react-icons/bi";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="mt-4 pr-4 md:pr-32 lg:pr-96">
            <div>
                <ul className="flex flex-row-reverse space-x-4 space-x-reverse">
                    <li>
                        <Link to="/" className='hover:text-red'>
                            <BiHome className='text-LightCyan ' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/favourites">
                            <BiStar className='text-LightCyan' />
                        </Link>
                    </li>
                </ul>
            </div >
        </nav >
    )
}

export default Navbar