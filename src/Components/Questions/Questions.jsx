import { useState } from 'react';
import '../../../dist/css/Questions.css';
import Accordion from './Accordion';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Questions() {
    const title1 = 'How do I  the right travel destination for me?';
    const title2 = 'How do I  the right travel destination for ?';
    const title3 = 'How do I  the right travel destination  ?';
    const title4 = 'How do I  the right travel ?';

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const [active, setActive] = useState('How do I choose the right travel destination for me?');
    return (

        <div className='questions section container'>
            <div className="secHeading" data-aos="fade-up">
                <h3>
                    Frequently Asked Questions
                </h3>
            </div>
            <div className='secContainer grid'>
                <div className="accordion grid" data-aos="fade-up">
                    <Accordion title={title1} active={active} setActive={setActive} desc="Consider bla bla bla bla bla" />
                    <Accordion title={title2} active={active} setActive={setActive} desc="Consider bla bla bla bla bla" />
                    <Accordion title={title3} active={active} setActive={setActive} desc="Consider bla bla bla bla bla" />
                    <Accordion title={title4} active={active} setActive={setActive} desc="Consider bla bla bla bla bla" />
                </div>
                <div className="form">
                    <div className="secHeading" data-aos="fade-up">
                        <h4>Do you have any specific question</h4>
                        <p data-aos="fade-up">
                            Please fill the form below and our dedicated team will get in touch with you.
                        </p>
                    </div>
                    <div className="formContent grid">
                        <input type='email' placeholder='Enter email' data-aos="fade-up" />
                        <textarea placeholder='Enter your question' data-aos="fade-up">

                        </textarea>
                        <button className='btn' data-aos="fade-up">
                            Submit Inquiry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions