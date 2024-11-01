import './Hero.scss';
import Mob from "../../assets/Mob.png"
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        Aos.init({duration : 1000})
    })

    return (
        <section className="hero">
            <div className="hero__container wrapper">
                <div className="hero__left" data-aos="fade-right">
                    <img src={Mob} alt='hero' />
                </div>
                <div className="hero__right" data-aos="zoom-in-up">
                    <h1>Making easier your crypto transactions</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Nostrum vel quod laborum aliquam soluta magnam perspiciatis architecto assumenda accusamus aspernatur voluptatum, 
                        tempora rerum odit distinctio. Corporis eos minus voluptatibus dicta.
                    </p>
                    <a href='#' className="btn">TRY FOR FREE</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
