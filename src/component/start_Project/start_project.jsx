import { Link } from "react-router-dom"
import "./start-project.css"

import img from "../../assets/images/hero.jpg"

function StartProject() {
    
    return(
        <section className="start_project">
            <div className="start_project_container">
                <div className="start_project_content">
                    <h1>Start Your Project With Us</h1>
                    <p>Start your project with a team that values precision, creativity, and trust. We transform ideas into functional, moderns spaces built to last</p>
                    <Link to="/" className="ancora">Contratar Serviço</Link>
                </div>
                <div className="start_project_image">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default StartProject