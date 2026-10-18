import AboutUs from "../../component/about/About"
import WhatWeDo from "../../component/what-we-do/what-we-do"
import HeroSection from "../../component/hero-section/Hero-section"
import Projects from "../../component/projects/projects"
import Services from "../../component/service_company/service"
import Testimonial from "../../component/testimonial/testimonial"
import StartProject from "../../component/start_Project/start_project"

function Homepage() {
    return (
       <div>
           <HeroSection />
           <AboutUs />
           <Services />
           <WhatWeDo />
           <Projects />
           <Testimonial />
           <StartProject />
       </div>
    )
}

export default Homepage