import ImgTest from "../../../assets/images/hero.jpg"
import correctDone from "../../../assets/icons/correct_done.svg"

import "./complete.css"

function AboutComplete() {
    return (
        <section className="about_page">
            <div className="about_page_container" id="about_page_container">
                <div className="about_page_hero">
                    <div className="about_page_hero_text">
                        <p className="description_section">[SOBRE NÓS]</p>
                        <h2>Conheça a Qualpav ,o Seu Parceiro na Construção</h2>
                        <p>A Qualpav é uma empresa de engenharia e construção dedicada à criação de infraestruturas de qualidade, desenvolvendo soluções que promovem o progresso e contribuem para o crescimento de Angola.</p>
                    </div>

                    <div className="about_page_hero_img">
                        <img src={ImgTest} alt="Imagecdvvcv" />
                    </div>
                </div>

                <div className="about_page_statics">
                    <p className="about_page_statics_text">Acreditamos que cada projeto representa uma oportunidade de transformar realidades e construir um futuro melhor. Por isso, trabalhamos com dedicação, rigor técnico e compromisso com a qualidade, desenvolvendo soluções que respondem às necessidades dos nossos clientes e contribuem para o crescimento sustentável de Angola.</p>

                    <div className="about_page_content_statics">
                        <div className="about_us_wrapper">
                            <h2 className="number"><span className="red_text">20+</span></h2>
                            <p className="legend_number">projectos Completos</p>
                        </div>
                        <div className="about_us_wrapper">
                            <h2 className="number"><span className="red_text">98%</span></h2>
                            <p className="legend_number">Clientes Satisfeitos</p>
                        </div>
                        <div className="about_us_wrapper">
                            <h2 className="number"><span className="red_text">10+</span></h2>
                            <p className="legend_number">Anos de Experiência</p>
                        </div>
                    </div>
                </div>

                <div className="about_page_mission">
                    <div className="about_mission_image">
                        <img src={ImgTest} alt="" />
                    </div>
                    <div className="about_mission_content">
                        <h2>Nossa Missão</h2>
                        <p>Desenvolver soluções de engenharia e construção que contribuam para o crescimento e a modernização de Angola, através da execução de projetos com elevados padrões de qualidade, segurança e eficiência. Trabalhamos para transformar ideias em infraestruturas sólidas e duradouras, criando valor para os nossos clientes e contribuindo para o desenvolvimento sustentável das comunidades.
                        </p>
                        <ul>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Garantir qualidade e excelência em cada projeto.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Promover segurança e eficiência em todas as operações.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Desenvolver infraestruturas modernas e duradouras.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Contribuir para o crescimento e desenvolvimento de Angola.</li>
                        </ul>
                    </div>
                </div>

                <div className="about_page_mission">

                    <div className="about_mission_content">
                        <h2>Nossos Objetivos</h2>
                        <p>A Qualpav orienta a sua atuação para alcançar resultados consistentes no setor da engenharia e construção, procurando crescer de forma sustentável, fortalecer a confiança dos seus clientes e contribuir para o desenvolvimento de Angola. Os nossos objetivos refletem a ambição de construir projetos de qualidade e criar valor duradouro.
                        </p>
                        <ul>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> - Desenvolver projetos de engenharia e construção com elevados padrões de qualidade.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Expandir a presença da Qualpav no mercado nacional.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Estabelecer parcerias estratégicas com clientes e fornecedores.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Contribuir para o desenvolvimento das infraestruturas e o crescimento de Angola.</li>
                        </ul>
                    </div>

                    <div className="about_mission_image">
                        <img src={ImgTest} alt="" />
                    </div>
                </div>

                <div className="about_page_mission">
                    <div className="about_mission_image">
                        <img src={ImgTest} alt="" />
                    </div>
                    <div className="about_mission_content">
                        <h2>O Nosso Diferencial</h2>
                        <p>Na Qualpav, acreditamos que a qualidade de um projeto está nos detalhes, no rigor da execução e na dedicação de cada profissional envolvido. Diferenciamo-nos pela capacidade de compreender as necessidades dos nossos clientes e transformá-las em soluções eficientes, seguras e duradouras. Cada desafio é uma oportunidade de demonstrar a nossa competência, responsabilidade e compromisso com a excelência.
                        </p>
                        <ul>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Atendimento personalizado e focado no cliente.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Rigor técnico em todas as etapas dos projetos.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Profissionais comprometidos com a excelência.</li>
                            <li><span><img src={correctDone} alt="correct_icon" /></span> Cumprimento dos padrões de qualidade e segurança.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComplete