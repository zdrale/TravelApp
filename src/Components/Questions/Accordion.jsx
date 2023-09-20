
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import '../../../dist/css/Questions.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Accordion({ title, desc, active, setActive }) {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='accordionContainer' data-aos="fade-up">
            <span className={(active === title ? 'activeTitle' : "") + " title" + " flex"}>
                {title}
                <span onClick={() => setActive(title)}>
                    {active === title ? <BsArrowUpCircle className='icon' /> : <BsArrowDownCircle className='icon' />}
                </span>
            </span>
            <p className={(active === title ? 'show ' : '') + "description"}>
                {desc}
            </p>
        </div>
    )
}

export default Accordion