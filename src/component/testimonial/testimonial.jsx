import React from "react";
import "./testimonial.css";

const testimonialsRow1 = [
    {
        id: 1,
        name: "João Manuel",
        role: "Cliente",
        text: "A QUALPAV demonstrou profissionalismo e qualidade na execução dos seus trabalhos. Uma empresa que transmite confiança.",
        initials: "JM",
    },
    {
        id: 2,
        name: "Maria Fernandes",
        role: "Parceira",
        text: "Excelente organização e compromisso com os prazos. A experiência de trabalhar com a QUALPAV foi bastante positiva.",
        initials: "MF",
    },
    {
        id: 3,
        name: "Carlos António",
        role: "Cliente",
        text: "Destaco a dedicação da equipa e a qualidade dos serviços prestados. Recomendo pela seriedade e profissionalismo.",
        initials: "CA",
    },
    {
        id: 4,
        name: "Pedro Miguel",
        role: "Parceiro",
        text: "Uma empresa comprometida com a excelência e com a execução de projectos de engenharia e construção.",
        initials: "PM",
    },
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <article className="testimonial-card">

            <div className="testimonial-top">
                <div className="testimonial-avatar">
                    {testimonial.initials}
                </div>

                <div className="testimonial-user">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                </div>
            </div>

            <div className="testimonial-stars">
                ★★★★★
            </div>

            <p>{testimonial.text}</p>

            <span className="testimonial-quote">”</span>

        </article>
    );
};

function Testimonial() {
    return (
        <section className="testimonials-section" id="testemunhos">

            {/* Cabeçalho */}
            <div className="testimonial_header">
                <p className="red_text">TESTEMUNHOS</p>
                <h1>Histórias de  <span className="red_text">Sucesso</span> dos clientes</h1>
            </div>

            {/* Primeira fileira - Esquerda */}
            <div className="testimonial-marquee">

                <div className="testimonial-track">

                    {[...testimonialsRow1, ...testimonialsRow1].map(
                        (testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                            />
                        )
                    )}

                </div>

            </div>


        </section>
    );
}

export default Testimonial;
