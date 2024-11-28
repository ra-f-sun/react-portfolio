
import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'

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
        {activeMenu=='Hero' && <h1>Hero</h1>}
        {activeMenu=='About' && <h1>About</h1>}
        {activeMenu=='Service' && <h1>Service</h1>}
        {activeMenu=='Experience' && <h1>Experience</h1>}
        {activeMenu=='Portfolio' && <h1>Portfolio</h1>}
        {activeMenu=='Testimonial' && <h1>Testimonial</h1>}
        {activeMenu=='Partner' && <h1>Partner</h1>}
        {activeMenu=='Blog' && <h1>Blog</h1>}
        {activeMenu=='ContactForm' && <h1>ContactForm</h1>}
        {activeMenu=='Footer' && <h1>Footer</h1>}
      </div>
      
    </div>
  )
}

export default App
