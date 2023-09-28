import Navbar from './Components/Navabr/Navbar';
import '../dist/css/App.css';
import Home from './Components/Home/Home';
import Middle from './Components/Middle/Middle';
import Destinations from './Components/Destinations/Destinations';
import Portfolio from './Components/Portfolio/Portfolio';
import Reviews from './Components/Reviews/Reviews';
import Questions from './Components/Questions/Questions';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import { Element } from 'react-scroll'

function App() {
  return (
    <>
      <div>
        <Element>
          <Navbar />
        </Element>

        <Element>
          <Home />
        </Element>

        <Element>
          <Middle />
        </Element>

        <Element name="destinations">
          <Destinations />
        </Element>

        <Element name='aboutus'>
          <Portfolio />
        </Element>

        <Element name='testimonials'>
          <Reviews />
        </Element>

        <Element>
          <Questions />
        </Element>

        <Element>
          <Subscribe />
        </Element>

        <Element>
          <Footer />
        </Element>

      </div>

    </>
  )
}

export default App
