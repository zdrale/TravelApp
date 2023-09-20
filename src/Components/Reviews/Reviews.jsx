import { AiFillStar } from 'react-icons/ai';
import '../../../dist/css/Reviews.css';

import image1 from '../../Assets/client1.jpg'
import image2 from '../../Assets/client2.jpg'
import image3 from '../../Assets/client3.jpg'
import image4 from '../../Assets/client4.jpg'
import image5 from '../../Assets/client5.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



function Reviews() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='review section container'>
            <div className='secContainer grid'>
                <div className='textDiv'>
                    <span className='redText' data-aos="fade-up">
                        From our Clients
                    </span>
                    <h3 data-aos="fade-up">
                        Real Travel History From our Beloved Clients
                    </h3>
                    <p data-aos="fade-up">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste consequuntur nulla, possimus illo eveniet libero sequi tenetur eos optio ducimus accusantium expedita consectetur eius voluptates, id cupiditate ullam distinctio!
                    </p>
                    <span data-aos="fade-up" className='stars flex'>
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                    </span>

                    <div className='clientsImages flex'>
                        <img src={image1} data-aos="fade-up" />
                        <img src={image2} data-aos="fade-up" />
                        <img src={image3} data-aos="fade-up" />
                        <img src={image4} data-aos="fade-up" />
                    </div>
                </div>
                <div className='imgDiv'>
                    <img src={image5} alt='image' data-aos="fade-down" />
                </div>
            </div>
        </div>
    )
}

export default Reviews