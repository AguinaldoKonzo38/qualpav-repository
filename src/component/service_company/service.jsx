import "./services.css"

import Img from "../../assets/images/test.png"

function Services() {
    return (
        <section className="services">
            <div className="service_container">
                <div className="service_header">
                    <p><span className="red_text">OUR SERVICES</span></p>
                    <h1>From <span className="red_text">Ideas</span> to Concrete Reality</h1>
                </div>

                <div className="service_wrapper">

                    <div className="service_item">
                        <h3 className="red_text">Residential Construction</h3>
                        <div className="image_item">
                            <img src={Img} alt="sss" />
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nam accusamus cupiditate eligendi incidunt cum rerum rem at eveniet iusto soluta est, veniam quo nihil commodi quas dolor libero! Culpa.</p>
                    </div>
                    <div className="service_item">
                        <h3 className="red_text">Commercial Construction</h3>
                        <div className="image_item">
                            <img src={Img} alt="sss" />
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nam accusamus cupiditate eligendi incidunt cum rerum rem at eveniet iusto soluta est, veniam quo nihil commodi quas dolor libero! Culpa.</p>
                    </div>
                    <div className="service_item">
                        <h3 className="red_text">Renovation & Remodeling</h3>
                        <div className="image_item">
                            <img src={Img} alt="sss" />
                        </div>
                        
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nam accusamus cupiditate eligendi incidunt cum rerum rem at eveniet iusto soluta est, veniam quo nihil commodi quas dolor libero! Culpa.</p>
                    </div>
                    <div className="service_item">
                        <h3 className="red_text">Architecture</h3>
                        <div className="image_item">
                            <img src={Img} alt="sss" />
                        </div>
                        
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nam accusamus cupiditate eligendi incidunt cum rerum rem at eveniet iusto soluta est, veniam quo nihil commodi quas dolor libero! Culpa.</p>
                    </div>
                    <div className="service_item">
                        <h3 className="red_text">Project Managemment</h3>
                        <div className="image_item">
                            <img src={Img} alt="sss" />
                        </div>
                        
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nam accusamus cupiditate eligendi incidunt cum rerum rem at eveniet iusto soluta est, veniam quo nihil commodi quas dolor libero! Culpa.</p>
                    </div>
                    <div className="service_item">
                        <h3 className="red_text">Structural Engineering</h3>
                        <div className="image_item">
                            <img src={Img} alt="sss" />
                        </div>
                        
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nam accusamus cupiditate eligendi incidunt cum rerum rem at eveniet iusto soluta est, veniam quo nihil commodi quas dolor libero! Culpa.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services