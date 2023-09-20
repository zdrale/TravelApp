import Video from '../../Assets/vid1.mp4'
import { AiOutlineSwapRight } from 'react-icons/ai';
import '../../../dist/css/Home.css'
import image1 from '../../Assets/img1.jpg';
import image2 from '../../Assets/img2.jpg';
import image3 from '../../Assets/img3.jpg';
import image4 from '../../Assets/img4.jpg';
import { useEffect } from 'react';


import Aos from 'aos';
import 'aos/dist/aos.css';


function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='Home'>
            <div className='videoBg'>
                <video src={Video} autoPlay loop muted>

                </video>
            </div>

            <div className='sectionText'>
                <h1 data-aos="fade-up">Unlock your travel dreams with us</h1>
                <p data-aos="fade-up">
                    Discover the worlds most adventurous nature, life is short for a trip
                </p>
                <button className='btn' data-aos="fade-up">
                    GET STARTED <AiOutlineSwapRight className='icon' />
                </button>
            </div>

            <div className='popularPlaces'>
                <div className='content'>
                    <h3 data-aos="fade-up">Popuplar places</h3>
                    <div className='images' data-aos="fade-up">
                        <img src={image1} alt=''></img>
                        <img src={image2} alt=''></img>
                        <img src={image3} alt=''></img>
                        <img src={image4} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home