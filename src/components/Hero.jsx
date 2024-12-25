import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <img
            className="h-[650px] w-full object-cover object-center"
            src={img1}
            alt="Slide 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-7xl text-3xl font-bold text-center mb-6"><Typewriter
              words={['Empower Volunteers, Build Communities']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>
            <Fade ><p className="font-normal w-[400px] md:w-[1000px] text-center">Empower Volunteers, Build Communities emphasizes the transformative power of volunteering. It highlights how empowering individuals with the tools, opportunities, and support to volunteer can lead to the creation of stronger, more connected communities.</p></Fade>
            <Link to='/all-Volunteer'>  <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">All Volunteer</button></Link>
          </div>

        </div>
        <div className="relative">

          <img
            className="h-[650px] w-full object-cover object-center"
            src={img2}
            alt="Slide 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-7xl text-3xl font-bold text-center mb-6"><Typewriter
              words={['Heroes Among Us: Volunteer Network']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>
            <Fade><p className="font-normal  w-[400px] md:w-[500px] text-center">Connecting everyday heroes to inspire, collaborate, and create lasting positive change through volunteering.</p></Fade>
            <Link to='/all-reviews'> <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">See Reviews</button></Link>
          </div>
        </div>
        <div className="relative">

          <img
            className="h-[650px] w-full object-cover object-center"
            src={img3}
            alt="Slide 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-7xl text-3xl font-bold text-center mb-6"><Typewriter
              words={['Your Time, Your Impact: Volunteer Portal']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>
            <Fade> <p className="font-normal  w-[400px] md:w-[1000px] text-center"> Your Time, Your Impact: Volunteer Portal highlights the value of even the smallest contributions of time in creating meaningful change. This platform empowers individuals to discover volunteer opportunities that align with their passions and schedules, making it easy to make a difference.</p></Fade>
            <Link to='/all-reviews'> <button className="text-white border-2 border-white rounded-full px-16 py-4 mt-8">See Reviews</button></Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;