
import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Partner from "./components/partner/Partner";
import Blog from "./components/blog/Blog";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";

function App() {
  let [activeMenu, setActiveMenu]=useState('Navbar')

  let handleActive=(menu)=>{
    setActiveMenu(menu)
    
  }
  return (
    <div className='admin-dashboard'>
      <div className="admin-option">
        <ul>
          <li onClick={()=>handleActive("Navbar")}>Navbar</li>
          <li onClick={()=>handleActive("Hero")}>Hero</li>
          <li onClick={()=>handleActive("About")}>About</li>
          <li onClick={()=>handleActive("Service")}>Service</li>
          <li onClick={()=>handleActive("Experience")}>Experience</li>
          <li onClick={()=>handleActive("Portfolio")}>Portfolio</li>
          <li onClick={()=>handleActive("Testimonial")}>Testimonial</li>
          <li onClick={()=>handleActive("Partner")}>Partner</li>
          <li onClick={()=>handleActive("Blog")}>Blog</li>
          <li onClick={()=>handleActive("ContactForm")}>ContactForm</li>
          <li onClick={()=>handleActive("Footer")}>Footer</li>
        </ul>
      </div>
      <div className="admin-views">
        {activeMenu=='Navbar' && <Navbar/>}
        {activeMenu=='Hero' && <Hero />}
        {activeMenu=='About' && <About/>}
        {activeMenu=='Service' && <Service/>}
        {activeMenu=='Experience' && <Experience/>}
        {activeMenu=='Portfolio' && <Portfolio/>}
        {activeMenu=='Testimonial' && <Testimonial/>}
        {activeMenu=='Partner' && <Partner/>}
        {activeMenu=='Blog' && <Blog/>}
        {activeMenu=='ContactForm' && <ContactForm/>}
        {activeMenu=='Footer' && <Footer/>}
      </div>
      
    </div>
  )
}

export default App
