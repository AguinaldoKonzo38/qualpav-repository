import "./Footer.css"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"



import ImgLogo from "../../assets/images/qualpav-logo.png"

function Footer() {
    return (
        <footer>
            <div className="footer" id="footer">
                <div className="footer_container">
                    <div className="contact_wrapper">
                        <div className="contact_item">
                            <div className="contact_icon"><FaPhoneAlt color="white" size={35} /> </div>
                            <div className="contact_content">
                                <p className="desc">Telefone</p>
                                <p>+244 928 170 460</p>
                                <p>+244 923 686 726</p>
                            </div>
                        </div>
                        <div className="contact_item">
                            <div className="contact_icon"> <MdEmail color="white" size={35} /> </div>
                            <div className="contact_content">
                                <p className="desc">Email</p>
                                <p className="">geral@qualpav.com</p>
                            </div>
                        </div>
                        <div className="contact_item">
                            <div className="contact_icon"> <FaLocationDot color="white" size={35} />  </div>
                            <div className="contact_content">
                                <p className="desc">Endereçco</p>
                                <p className="local">Bairro Mbondo Chapé, Município de Belas, Luanda, Angola.</p>
                            </div>
                        </div>

                        {/* <div className="border"></div> */}
                    </div>

                    <div className="border"></div>

                    <div className="footer_top">
                        <div className="footer_logo">
                            <img src={ImgLogo} alt="Logo" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates, asperiores consequuntur molestiae odio dolorum corporis. Deleniti dolorem porro</p>
                        </div>

                        <div className="other_information">
                            <div className="fast_links of">
                                <p className="f-title">Links Rápido</p>
                                <div>
                                    <Link to="/">Sobre nós</Link>
                                    <Link to="/">Blog</Link>
                                    <Link to="/">Contactos</Link>
                                    <Link to="/">Agendar Serviço</Link>

                                </div>
                            </div>
                            <div className="footer_social of">
                                <p className="f-title">Siga-nos</p>
                                <div>
                                    <a href="#" target="_blank"> <FaFacebook color="#000" /></a>
                                    <a href="#" target="_blank"><FaInstagram color="#000" /></a>
                                    <a href="#" target="_blank"><FaLinkedin color="#000" /></a>
                                    <a href="#" target="_blank"><FaTwitter color="#000" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_bottom">
                        <div className="copyrigth">
                            <span>&copy; 2026 - Feito por </span>
                            <a href="#" target="_blank" rel="noopener noreferrer">Growth2Business</a>
                        </div>

                        <div className="footer_links">
                            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
                            <Link to="/termos-de-uso">Termos e condições</Link>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;




