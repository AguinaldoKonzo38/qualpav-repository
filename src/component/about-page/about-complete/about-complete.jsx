
import ImgTest from "../../../assets/images/hero.jpg"

import "./complete.css"

function AboutComplete() {
    return (

        <section className="about_us complete">
            <div className="about_us_container">
                <div className="about_image">
                    <img src={ImgTest} alt="" />
                </div>
                <div className="about_us_content">
                    <div className="box_id">
                        <span className="rounder"></span>
                        <p><span className="red_text">10</span> Anos de Experiência</p>
                    </div>
                    <div className="subtitle">
                        <p>Provinding the best</p>
                        <p>quality service</p>
                    </div>
                    <div className="text">
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste voluptatem nostrum explicabo, autem amet modi rerum molestiae tempora eaque rem nemo laboriosam dolores accusantium veniam minus cum quas? Explicabo.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutComplete