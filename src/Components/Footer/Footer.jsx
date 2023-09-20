import '../../../dist/css/Footer.css';
import { BiLogoMediumOld } from 'react-icons/bi'
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';




function Footer() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='footer'>
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div className="footerLogo" data-aos="fade-up">
                        <BiLogoMediumOld className='icon' />
                        <span> OU-Trips</span>
                    </div>

                    <div className="socials flex" data-aos="fade-up">
                        <ImFacebook className='icon' />
                        <BsInstagram className='icon' />
                        <AiFillTwitterCircle className='icon' />
                    </div>
                </div>
                <div className="footerLinks" data-aos="fade-up">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <a href='#'>Home</a>

                    </li>

                    <li>
                        <a href='#'>Explore</a>

                    </li>

                    <li>
                        <a href='#'>Travel</a>

                    </li>

                    <li>
                        <a href='#'>Blog</a>

                    </li>
                </div>

                <div className="footerLinks" data-aos="fade-up">
                    <span className="linkTitle">
                        Support
                    </span>
                    <li>
                        <a href='#'>Destinations </a>

                    </li>

                    <li>
                        <a href='#'>Support</a>

                    </li>

                    <li>
                        <a href='#'>Travel & Condition</a>

                    </li>

                    <li>
                        <a href='#'>Privacy</a>

                    </li>
                </div>

                <div className="footerLinks" data-aos="fade-up">
                    <span className="linkTitle">
                        Contact Details
                    </span>
                    <br />
                    <span className="email">
                        +387273273
                    </span>
                    <span className="email">
                        email@email.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer