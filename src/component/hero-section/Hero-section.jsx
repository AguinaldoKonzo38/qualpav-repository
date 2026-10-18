import "./Hero-section.css"

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

import hero1 from "../../assets/images/hero1.png"
import hero2 from "../../assets/images/hero2.png"
import hero3 from "../../assets/images/hero3.jpg"
import { useEffect, useState } from "react"

function HeroSection() {

    const slides = [
        {
            title: "Mais do que construir, transformamos.",
            description: "Na Qualpav, transformamos projetos em infraestruturas de qualidade, criando soluções que impulsionam o desenvolvimento e constroem o futuro de Angola.",
            image: hero1,
        },

        {
            title: "Construímos hoje o caminho para o amanhã.",
            description: "Aliamos experiência, dedicação e rigor em cada obra, garantindo soluções de construção que respondem às necessidades dos nossos clientes.",
            image: hero2,
        },

        {
            title: "Construímos caminhos para o futuro.",
            description: "Desenvolvemos soluções de engenharia e construção que ligam comunidades, criam oportunidades e contribuem para o crescimento de Angola",
            image: hero3,
        }
    ]

    const [actualIndice, setActualIndice] = useState(0)

    const goTonextSlide = () => {
        if (actualIndice === slides.length - 1) {
            setActualIndice(0)
        } else {
            setActualIndice(actualIndice + 1)
        }
    }

    const goTofarSlide = () => {
        if (actualIndice === 0) {
            setActualIndice(slides.length - 1)
        } else {
            setActualIndice(actualIndice - 1)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (actualIndice === slides.length - 1) {
                setActualIndice(0)
            } else {
                setActualIndice(actualIndice + 1)
            }
        }, 5000)
        return () => clearInterval(timer)
    }, [actualIndice, slides.length])


    return (
        <section className="hero_container" id="hero_section" style={{backgroundImage: `url(${slides[actualIndice].image})`}}>
           
            <div className="hero_slide">
                <div className="hero_text">
                    <h1>{slides[actualIndice].title}</h1>
                    <p>{slides[actualIndice].description}</p>
                </div>

                <div className="controllerCarossel">
                    <button onClick={goTofarSlide}>
                        <FaChevronCircleLeft className="chevron" size={40} color="red" />
                    </button>
                    <button onClick={goTonextSlide}>
                        <FaChevronCircleRight className="chevron" size={40} color="red" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection