import './Status.scss';
import StatusImg from "../../assets/status.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Status = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    })
    return (
        <section className="status">
            <div className="status__container wrapper">
                <div className="status__left" data-aos="zoom-in-up">
                    <h2>Trust us to our safe and convenient deposit</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, hic numquam. Aspernatur debitis accusamus possimus. 
                        Quas iusto consequuntur, asperiores a vitae, cumque voluptates voluptatibus autem nisi voluptas debitis sequi atque.
                    </p>
                    <a href='#' className='btn'>
                        KNOW MORE
                    </a>
                </div>

                <div className="status__right" data-aos="fade-left">
                    <img src={StatusImg} alt='status'/>
                </div>
            </div>
        </section>
    )
}

export default Status
