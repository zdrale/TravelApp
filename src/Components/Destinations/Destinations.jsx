import { MdLocationPin } from 'react-icons/md'
import { BsFillCreditCard2BackFill, BsCalendarDateFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';
import '../../../dist/css/Destinations.css';
import image1 from "../../Assets/img1.jpg";
import image2 from "../../Assets/img2.jpg";
import image3 from "../../Assets/img3.jpg";
import image4 from "../../Assets/img4.jpg";
import image5 from "../../Assets/img5.jpg";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const destinations = [
    {
        id: 1,
        img: image1,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.7
    },
    {
        id: 2,
        img: image2,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.7
    },
    {
        id: 3,
        img: image3,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 3.2
    },
    {
        id: 4,
        img: image4,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.2
    },
    {
        id: 5,
        img: image5,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.4
    },
    {
        id: 5,
        img: image5,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.4
    },
    {
        id: 5,
        img: image5,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.4
    },
    {
        id: 5,
        img: image5,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.4
    },
    {
        id: 5,
        img: image5,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.4
    }
    ,
    {
        id: 5,
        img: image5,
        name: 'Seychelles island',
        location: 'Indian Ocean',
        rating: 4.4
    }
]

function Destinations() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='destination section container'>
            <div className='secContainer'>
                <div className='secTitle'>
                    <span className='redText' data-aos="fade-up">
                        EXPLORE NOW
                    </span>
                    <h3 data-aos="fade-up">
                        Find your dream destination
                    </h3>
                    <p data-aos="fade-up">
                        Fill in the fields below to find the best spot for your next tour.
                    </p>

                    <div className='searchField grid'>
                        <div className="inputField flex" data-aos="fade-up">
                            <MdLocationPin className='icon' />
                            <input type='text' placeholder='Location' />
                        </div>
                        <div className="inputField flex" data-aos="fade-up">
                            <BsFillCreditCard2BackFill className='icon' />
                            <input type='text' placeholder='Budget' />
                        </div>
                        <div className="inputField flex" data-aos="fade-up">
                            <BsCalendarDateFill className='icon' />
                            <input type='text' placeholder='Date' />
                        </div>

                        <button className='btn flex' data-aos="fade-up">
                            <BiSearchAlt className='icon' />
                            Search
                        </button>
                    </div>

                    <div className='secMenu'>
                        <ul className='flex' data-aos="fade-up">
                            <li className='active'>
                                All
                            </li>
                            <li className='active'>
                                Recommended
                            </li>
                            <li className='active'>
                                Beach
                            </li>
                            <li className='active'>
                                Park
                            </li>
                            <li className='active'>
                                Nature
                            </li>
                            <li className='active'>
                                Mountain
                            </li>
                        </ul>
                    </div>
                    <div className='destinationContainer grid'>
                        {destinations.map((destination) => {
                            return (
                                <div key={destination.id} className='singleDestination' data-aos="fade-up">
                                    <div className='imgDiv'>
                                        <img src={destination.img}></img>
                                        <div className='descInfo flex'>
                                            <div className='text'>
                                                <span className='name'>
                                                    {destination.name}
                                                </span>
                                                <p className='flex'>
                                                    <TiLocation className='icon' />
                                                    {destination.location}
                                                </p>
                                            </div>
                                            <span className='rating'>{destination.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations