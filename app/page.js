import HomePage from "@/Components/HomePage"
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Services from "@/Components/Services";
import Project from "@/Components/Project";
import ContactUs from "@/Components/ContactUs";
import OurVision from "@/Components/OurVision";
import Experience from "@/Components/Experience";
import Testimonials from "@/Components/Testimonials";

//for animation
import "aos/dist/aos.css";

export default function Home() {
  
  return (
    <div className="bg-gray-900 overflow-hidden ">
    <HomePage/>
   <About/>
   <OurVision/>
  <Services/>
       <Experience/>
    <Skills/> 
    <Project/>
    <Testimonials/>
    <ContactUs/>
    </div>
  );
}
