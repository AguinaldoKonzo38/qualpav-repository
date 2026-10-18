import { Link } from "react-router-dom"
import "./testimonial.css"


function Testimonial() {

    return (
        <section className="testimonial" id="testimonial">
            <div className="testimonial_container">
                <div className="testimonial_header">
                    <p className="red_text">TESTIMONIAL</p>
                    <h1>Client <span className="red_text">Success</span> Stories</h1>
                </div>
                <div className="testimonial_wrapper">
                    <div className="testimonial_card">
                        <p className="testemunho">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita, earum reiciendis deserunt explicabo totam odit natus dolore ratione doloremque vi</p>
                        <div className="testimonial_client">
                            <div className="circle">CD</div>
                            <div className="info_client">
                                <p>Chloe Dubois</p>
                                <span>Interior Designer</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial_card">
                        <p className="testemunho">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita, earum reiciendis deserunt explicabo totam odit natus dolore ratione doloremque vi</p>
                        <div className="testimonial_client">
                            <div className="circle">CD</div>
                            <div className="info_client">
                                <p>Chloe Dubois</p>
                                <span>Interior Designer</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial_card">
                        <p className="testemunho">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita, earum reiciendis deserunt explicabo totam odit natus dolore ratione doloremque vi</p>
                        <div className="testimonial_client">
                            <div className="circle">CD</div>
                            <div className="info_client">
                                <p>Chloe Dubois</p>
                                <span>Interior Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial