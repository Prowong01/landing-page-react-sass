import Logo from '../../assets/Logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaLink } from "react-icons/fa";
import Aos from 'aos';
import "aos/dist/aos.css";
import './Footer.scss'
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000});
    });
    return (
        <footer className="footer">
            <div className="footer__container wrapper" data-aos="fade-up">
                <div className="footer__col">
                    <img src={Logo} alt='logo'/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat harum laudantium illo vitae dolorem corrupti corporis consequatur exercitationem, 
                        neque explicabo impedit perferendis tenetur nemo dolores tempora, eveniet quasi id.
                    </p>
                </div>
                
                <div className="footer__col">
                    <h3>About</h3>
                    <a href='#'>about us</a>
                    <a href='#'>features</a>
                    <a href='#'>news</a>
                </div>

                <div className="footer__col">
                    <h3>Company</h3>
                    <a href='#'>Cryptocode</a>
                    <a href='#'>Security</a>
                    <a href='#'>Ranking</a>
                </div>

                <div className="footer__col">
                    <h3>Support</h3>
                    <a href='#'>FAQs</a>
                    <a href='#'>Support</a>
                    <a href='#'>Contact us</a>
                </div>

                <div className="footer__col">
                    <h3>Socials</h3>
                    <div className="footer__icons">
                        <a href="#" className="footer__icon">
                            <FaFacebook />
                        </a>
                        <a href="#" className="footer__icon">
                            <FaInstagram />
                        </a>
                        <a href="#" className="footer__icon">
                            <FaTwitter />
                        </a>
                        <a href="#" className="footer__icon">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
