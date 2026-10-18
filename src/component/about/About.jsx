import "./About.css"

import ImgTest from "../../assets/images/hero.jpg"
import { Link } from "react-router-dom"

function AboutUs() {
    return (
        <section className="about_us" id="about_us">
            <div className="about_us_container">
                <div className="about_image">
                    <img src={ImgTest} alt="" />
                </div>

                <div className="about_us_content">
                    <div className="about_us_content_title">
                        <p className="red_text">SOBRE NÓS</p>
                        <h2>conheça a <span className="red_text"> Qualpav</span> ,o Seu Parceiro na Construção</h2>
                    </div>

                    <div className="about_us_content_text">
                        <p>A Qualpav é uma empresa de engenharia e construção dedicada à criação de infraestruturas de qualidade, desenvolvendo soluções que promovem o progresso e contribuem para o crescimento de Angola.</p>
                    </div>

                    <div className="about_us_content_statics">
                        <div className="about_us_wrapper">
                            <h2 className="number"><span className="red_text">20+</span></h2>
                            <p className="legend_number">projectos Completos</p>
                        </div>
                        <div className="about_us_wrapper">
                            <h2 className="number"><span className="red_text">98%</span></h2>
                            <p className="legend_number">Clientes Satisfeitos</p>
                        </div>
                        <div className="about_us_wrapper">
                            <h2 className="number"><span className="red_text">10+</span></h2>
                            <p className="legend_number">Anos de Experiência</p>
                        </div>
                    </div>

                    <Link to="/about-us" className="btn_about_us">Ler Mais</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutUs