import "./what-we-do.css"

function WhatWeDo() {
    return (
        <section className="what_we_do">
            <div className="What_container">
                <div className="what_text">
                    <p className="red_text">O QUE FAZEMOS</p>
                    <h1>Soluções que Oferecemos</h1>
                    <p className="What_text_normal">Oferecemos soluções completas de construção civil, adaptadas às suas necessidades. Desde o planeamento e a concepção até à execução e manutenção, garantimos que cada projecto seja realizado com precisão e qualidade. </p>
                </div>

                <div className="what_wrapper">
                    <div className="what_card_item">
                        <h3 className="">SOLUÇÃO 1</h3>
                        <div>
                            <h4 className="">Planeamento Estratégico</h4>
                            <p>Desenvolvemos soluções bem estruturadas, com planeamento cuidadoso para optimizar recursos, reduzir riscos e garantir melhores resultados.</p>
                        </div>
                    </div>
                    <div className="what_card_item">
                        <h3 className=" ">SOLUÇÃO 2</h3>
                        <div>
                            <h4 className="">Eficiência e Inovação</h4>
                            <p>Aplicamos métodos e abordagens modernas para melhores processos, aumentar a produtividade e responder aos desafios de cada projecto.</p>
                        </div>
                    </div>
                    <div className="what_card_item">
                        <h3 className="">SOLUÇÃO 3</h3>
                        <div>
                            <h4 className="">Qualidade e Segurança</h4>
                            <p>Priorizamos elevados padrões de qualidade e segurança, assegurando soluções confiáveis e alinhadas com as exigências de cada obra.</p>
                        </div>
                    </div>
                    <div className="what_card_item">
                        <h3 className="">SOLUÇÃO 4</h3>
                        <div>
                            <h4 className="">Sustentabilidade e Durabilidade</h4>
                            <p>Procuramos desenvolver soluções duradouras e responsáveis, valorizando os recursos e contribuindo para infraestruturas preparadas para o futuro.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;