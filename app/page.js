import HomePage from "@/Components/HomePage"
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Services from "@/Components/Services";
import Project from "@/Components/Project";
import ContactUs from "@/Components/ContactUs";
import OurVision from "@/Components/OurVision";
export default function Home() {
  return (
    <div>
    <HomePage/>
   <About/>
   <OurVision/>
       <Services/>
    <Skills/>
    <Project/>
    <ContactUs/>
    </div>
  );
}
