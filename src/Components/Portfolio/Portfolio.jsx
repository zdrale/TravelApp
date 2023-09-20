import icon1 from '../../Assets/protection.png';
import icon2 from '../../Assets/destination.png';
import icon3 from '../../Assets/online-chat.png';
import '../../../dist/css/Portfolio.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Portfolio() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="portfolio section container">
            <div className="secContainer">
                <div className="leftContent">
                    <div className="secHeading" data-aos="fade-up">
                        <h3 data-aos="fade-up">
                            Why choose us?
                        </h3>
                        <p data-aos="fade-up">
                            We have extensive knowledge and experinece in travel industry.
                        </p>

                    </div>

                    <div className="grid">
                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon1} alt="img" data-aos="fade-up-right"></img>
                            </div>
                            <div className="infor">
                                <h4 data-aos="fade-up">Safety and support</h4>
                                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et aut atque inventore maiores alias accusantium ut veritatis?</p>
                            </div>
                        </div>
                    </div>


                    <div className="grid">
                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon2} alt="img" data-aos="fade-up-right"></img>
                            </div>
                            <div className="infor">
                                <h4 data-aos="fade-up">Diverse Range of destinations</h4>
                                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et aut atque inventore maiores alias accusantium ut veritatis?</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon3} alt="img" data-aos="fade-up-right"></img>
                            </div>
                            <div className="infor">
                                <h4 data-aos="fade-up">24/7 Customer Support</h4>
                                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et aut atque inventore maiores alias accusantium ut veritatis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio