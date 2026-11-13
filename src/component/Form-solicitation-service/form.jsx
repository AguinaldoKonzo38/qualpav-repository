
// ?variant="standard" id="58392" title="SolicitarServico.jsx"}
// ```jsx

import { useState } from "react";
import "./SolicitarServico.css";

export default function SolicitarServico() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "",
    email: "",
    descricao: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Futuramente será integrado com EmailJS
    console.log("Solicitação:", formData);

    setShowPopup(true);

    setFormData({
      nome: "",
      telefone: "",
      servico: "",
      email: "",
      descricao: "",
    });
  };

  return (
    <section className="solicitar-page">

      <div className="solicitar-header">
        <span>FALE COM A QUALPAV</span>

        <h1>
          Vamos dar início ao seu <strong>projeto?</strong>
        </h1>

        <p>
          Conte-nos o que precisa. A nossa equipa está preparada
          para analisar a sua solicitação e apresentar a melhor solução.
        </p>
      </div>

      <div className="solicitar-container">

        {/* INFORMAÇÕES */}
        <div className="solicitar-info">
          <span className="info-label">SOLICITE UM SERVIÇO</span>

          <h2>
            Transformamos as suas ideias em projetos concretos.
          </h2>

          <p>
            Preencha o formulário com os detalhes do seu projeto.
            A nossa equipa entrará em contacto para compreender
            melhor as suas necessidades.
          </p>

          <div className="info-item">
            <span>01</span>
            <div>
              <h3>Partilhe a sua necessidade</h3>
              <p>Explique-nos o serviço que pretende contratar.</p>
            </div>
          </div>

          <div className="info-item">
            <span>02</span>
            <div>
              <h3>Analisamos o seu pedido</h3>
              <p>A nossa equipa avaliará os detalhes da solicitação.</p>
            </div>
          </div>

          <div className="info-item">
            <span>03</span>
            <div>
              <h3>Entramos em contacto</h3>
              <p>Contactaremos para dar seguimento ao seu projeto.</p>
            </div>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="solicitar-form-wrapper">

          <div className="form-heading">
            <h2>Solicitar um Serviço</h2>
            <p>Todos os campos são de preenchimento obrigatório.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Nome completo *</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite o seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Telefone *</label>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Ex: 923 000 000"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Selecione um serviço *</label>

                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Escolha o serviço pretendido
                  </option>

                  <option value="Construção Civil">
                    Construção Civil
                  </option>

                  <option value="Engenharia">
                    Construção de Estradas
                  </option>

                  <option value="Fiscalização de Obras">
                    Fiscalização de Obras
                  </option>

                  <option value="Reabilitação e Remodelação">
                    Reabilitação e Remodelação
                  </option>

                  <option value="Consultoria Técnica">
                    Instalações eléctricas
                  </option>

                  <option value="Outros Serviços">
                    Outros Serviços
                  </option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>E-mail *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Ex: seuemail@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Descrição do projeto *</label>

                <textarea
                  name="descricao"
                  placeholder="Descreva detalhadamente o projeto ou serviço que pretende solicitar..."
                  value={formData.descricao}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

            </div>

            <button type="submit" className="btn-solicitar">
              Enviar Solicitação
              <span>→</span>
            </button>

            <p className="form-privacy">
              Os seus dados serão utilizados para dar seguimento
              à sua solicitação.
            </p>

          </form>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="success-popup">

            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
              aria-label="Fechar"
            >
              ×
            </button>

            <div className="success-icon">✓</div>

            <h2>Solicitação submetida!</h2>

            <p>
              A sua solicitação foi submetida com sucesso.
              A nossa equipa entrará em contacto consigo em breve
              para dar seguimento ao seu pedido.
            </p>

            <button
              className="popup-button"
              onClick={() => setShowPopup(false)}
            >
              Entendido
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
