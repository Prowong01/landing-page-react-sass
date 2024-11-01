import './Earning.scss';
import Img from "../../assets/earnings.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Earning = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  })
  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left" data-aos="fade-right">
          <img src={Img} alt='earnings'/>
        </div>
        <div className="earnings__right" data-aos="zoom-in-up">
          <h2>Track your earnings and cryptocode made it easy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, voluptatem rerum voluptas ad id itaque 
            aspernatur et debitis expedita numquam, quasi magni distinctio in odio soluta illo, minima consequuntur animi!
          </p>
          <a href='#' className='btn'>
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  )
}

export default Earning
