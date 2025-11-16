import HomePage from "@/Components/HomePage"
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Services from "@/Components/Services";
import Project from "@/Components/Project";
import ContactUs from "@/Components/ContactUs";
export default function Home() {
  return (
    <div>
    <HomePage/>
   <About/>
    <Skills/>
    <Services/>
    <Project/>
    <ContactUs/>
    </div>
  );
}
