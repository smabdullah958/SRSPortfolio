
import HomePage from "@/Components/HomePage"
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Services from "@/Components/Services";
import Project from "@/Components/Project";
import ContactUs from "@/Components/ContactUs";
import OurVision from "@/Components/OurVision";
export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return (
    <div className="bg-gray-900">
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
