import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import "./header.css"
import { useState } from "react"
import ModalMenuMobile from "./Menu-mobile"

import ImgLogo from "../../assets/images/qualpav-logo.png"


function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const eventScrool = (id) => {
        const sectionSelected = document.getElementById(id)

        if (sectionSelected) {
            sectionSelected.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link className="logoo" to="/"><img src={ImgLogo} alt="" /></Link>
                </div>

                <ul className="nav-links" >
                    <li>
                        <Link className="link" to="/" onClick={() => eventScrool("hero_section")} >Início</Link>
                    </li>

                    <li>
                        <Link className="link" to="/" onClick={() => eventScrool("about_us")}>Sobre nós</Link>
                    </li>

                    <li>
                        <Link to="/" onClick={() => eventScrool("projects")} >Projectos</Link>
                    </li>

                    <li>
                        <Link className="link" to="/" onClick={() => eventScrool("footer")}>Contactos</Link>
                    </li>
                </ul>

                <div className="nav-rigth">
                    <Link to="/SolicitarServico" className="contratar">Solicitar Serviço</Link>

                    <FaBars onClick={() => setIsOpen(true)} className="menu_mobile" size={26} />
                </div>
            </nav>

            <ModalMenuMobile
                isOpen={isOpen}
                onClose={() => setIsOpen(false)} />
        </header>
    )
}

export default Header