import { Link } from "react-router-dom"
import "./start-project.css"

import img from "../../assets/images/hero.jpg"

function StartProject() {
    
    return(
        <section className="start_project" id="start_project">
            <div className="start_project_container">
                <div className="start_project_content">
                    <h1>Comece o Seu Projecto Connosco</h1>
                    <p>Comece o seu projecto com uma equipa que valoriza a precisão, criatividade e confiança. Transformamos ideias em espaços funcionais e modernos, construídos para durar</p>
                    <Link to="/SolicitarServico" className="ancora">Solicitar Orçamento</Link>
                </div>
                <div className="start_project_image">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default StartProject