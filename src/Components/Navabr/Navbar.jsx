import '../../../dist/css/Navbar.css';
import { BiLogoMediumOld } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'
import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";



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
                        <Link to="destinations" smooth={true} duration={500} offset={-80} >
                            Destinations
                        </Link>
                    </li>

                    <li className='navList'>
                        <Link to="aboutus" smooth={true} duration={500} offset={-150}>
                            About us
                        </Link>
                    </li>

                    <li className='navList'>
                        <Link to="testimonials" smooth={true} duration={500} offset={-80}>
                            Testimonial
                        </Link>
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