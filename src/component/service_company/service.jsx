import React from "react";
import "./services.css";

const services = [
  {
    id: 1,
    category: "Vias de comunicação",
    title: "Construção de estradas",
    description:
      "Construção de estradas e vias de acesso, garantindo qualidade, segurança e durabilidade.",
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02d?w=800&q=85",
  },
  {
    id: 2,
    category: "Instalação eléctrica",
    title: "Instalações eléctricas",
    description:
      "Execução de instalações e sistemas eléctricos em edifícios e diferentes infraestruturas.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85",
  },
  {
    id: 3,
    category: "Construção de edifícios",
    title: "Construção de edifícios",
    description:
      "Construção de edifícios com soluções eficientes, qualidade e rigor em cada etapa.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85",
  },

  {
    id: 4,
    category: "Obras de realce",
    title: "Valorização de infraestruturas",
    description:
      "Execução de intervenções e melhorias destinadas à valorização de infraestruturas.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=85",
  },
];

function Services() {
  return (
    <section className="services-section" id="servicos">
      <div className="services-container">

        {/* Cabeçalho */}
        <div className="service_header">
          <p className="red_text">NOSSOS SERVIÇOS</p>
          <h1>Das <span className="red_text">Ideias</span> à Realidade Concreta</h1>
        </div>

        {/* Grelha de serviços */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>

              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <span className="service-number">
                  {String(service.id).padStart(2, "0")}
                </span>
              </div>

              <div className="service-content">

                <span className="service-category">
                  {service.category}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contactos" className="service-link">
                  Solicitar serviço
                  <span>↗</span>
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
