import '../../../dist/css/Subscribe.css';
import image from '../../Assets/lady.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Subscribe() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='subscribe section container'>
            <div className="secContainer grid">
                <img className='callImage' src={image} alt='' data-aos="fade-right" />
                <div className="textDiv" data-aos="fade-up">
                    <h4>
                        Best way to start your journey
                    </h4>
                    <p data-aos="fade-up">
                        We offer Personalized offers from individual preferences and interests.
                    </p>
                    <button className='btn'>Start here</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe