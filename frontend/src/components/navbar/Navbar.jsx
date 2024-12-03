import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";

const Navbar = () => {
  let [menuItem, setMenuItem]=useState([])
  let [buttonText, setButtonText]=useState("")
  let [buttonShow, setButtonShow]=useState(true)
  

  useEffect(()=>{
    async function fetchData(){
      let data = await axios.get('http://localhost:3000/navitem')  
       
      setMenuItem(data.data.menuItem.split(","));
      setButtonText(data.data.buttonText)
      setButtonShow(data.data.buttonShow)
    }
    fetchData()
  },[])

  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav-container">
          <a href="#">
            <img src="images/Logo.png" alt="" />
          </a>
          <ul className="menu-items">
            {menuItem.map((item)=>(
              // eslint-disable-next-line react/jsx-key
              <a href="#">
              {" "}
              <li>{item}</li>{" "}
            </a>
            ))}  
          </ul>
          {buttonShow && <button className="nav-btn" >{buttonText}</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
