import "./modal-menu-mobile.css"
import { Link } from "react-router-dom";

function ModalMenuMobile({ isOpen, onClose }) {

    if (!isOpen) return null

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
        <div className="mask" onClick={() => onClose(false)}>

            <div className="modal-menu">
                <div className="btn-close-menu">
                    <button
                        onClick={() => onClose(false)}
                    >X</button>
                </div>

                <nav className="nav-links-mobile">
                    <Link className="ancora" to="/"><h6 onClick={() => eventScrool("hero_section")}>Início</h6></Link>
                    <Link className="ancora" to="/"><h6 onClick={() => eventScrool("about_us")} >Sobre nós</h6></Link>
                    {/* <Link className="ancora" to="/"><h6 onClick={() => scrollToSection("mission")}>Missão</h6></Link> */}
                    {/* <Link className="ancora" to="/" ><h6>Notícias</h6></Link> */}
                    <Link className="ancora" to="/"><h6 onClick={() => eventScrool("footer")} >Contato</h6></Link>
                </nav>

            </div>
        </div>
    )
}
export default ModalMenuMobile;