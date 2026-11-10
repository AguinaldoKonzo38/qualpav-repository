import "./projects.css"

import imgTest from "../../assets/images/pexels-alonzo-photo-2765040-6678153.jpg"
function Projects() {
    return (
        <section className="projects">
            <div className="projects_container">
                <div className="projects_header">
                    <p className="red_text">OUR PROJECTS</p>
                    <h1><span className="red_text">Projects</span> at a Glance</h1>
                </div>

                <div className="projects_wrapper">
                    <div className="project_card_item">
                        <img src={imgTest} alt="" />
                        <div className="project_image_content">
                            <h2>Title</h2>
                            <p>Content yydxfydy gfgg fgvfvdfvf  rfvf</p>
                        </div>
                    </div>
                    <div className="project_card_item">
                        <img src={imgTest} alt="" />
                        <div className="project_image_content">
                            <h2>Title</h2>
                            <p>Content yydxfydy gfgg fgvfvdfvf  rfvf</p>
                        </div>
                    </div>
                    <div className="project_card_item">
                        <img src={imgTest} alt="" />
                        <div className="project_image_content">
                            <h2>Title</h2>
                            <p>Content yydxfydy gfgg fgvfvdfvf  rfvf</p>
                        </div>
                    </div>
                    <div className="project_card_item">
                        <img src={imgTest} alt="" />
                        <div className="project_image_content">
                            <h2>Title</h2>
                            <p>Content yydxfydy gfgg fgvfvdfvf  rfvf</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Projects