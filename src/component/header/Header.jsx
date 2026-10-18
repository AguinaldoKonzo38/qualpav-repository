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

        if(sectionSelected) {
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
                        <Link className="link" to="/" onClick={() => eventScrool("hero_section")} >Home</Link>
                    </li>
                    <li>
                        {/* <Link to="/">Serviços</Link> */}
                    </li>
                    <li>
                        <Link className="link" to="/" onClick={()=> eventScrool("about_us")}>Sobre nós</Link>
                    </li>
                    <li>
                        <Link className="link" to="/" onClick={() => eventScrool("footer")}>Contactos</Link>
                    </li>
                </ul>

                <div className="nav-rigth">
                    {/* <div className="number">
                        <div className="number_btn_wrap">
                            <span>+244 928 170 460</span>
                            <span>+244 923 686 726</span>
                        </div>
                    </div> */}
                    <Link to="" className="contratar">Contratar Serviço</Link>

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