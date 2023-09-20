import '../../../dist/css/NavBar.css';
import { BiLogoMediumOld } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'
import { useState } from 'react';
function Navbar() {
    const [navBar, setNavBar] = useState('menu');

    const showNavBar = () => {
        setNavBar('menu showNavBar');
    }

    const closeNavBar = () => {
        setNavBar('menu');
    }
    return (
        <div className='navBar'>
            <div className='logoDiv'>
                <BiLogoMediumOld />
                <span>Trips</span>
            </div>

            <div className={navBar}>
                <ul>
                    <li className='navList'>
                        Destination
                    </li>
                    <li className='navList'>
                        About us
                    </li> <li className='navList'>
                        Testimonial
                    </li> <li className='navList'>
                        Gallery
                    </li>
                </ul>
                <AiFillCloseCircle className='icon closeIcon' onClick={closeNavBar} />
            </div>
            <button className='signUpBtn btn'>
                Sign Up
            </button>
            <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
        </div>
    )
}

export default Navbar