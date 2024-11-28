import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";

const Navbar = () => {
  let [list,setList] = useState([])

  useEffect(()=>{
    async function fetchData(){
      let data = await axios.get('http://localhost:3000/navitem')  
      console.log(data.data.menuItem);
      
      console.log(data.data.menuItem.split(","));
       
      setList(data.data.menuItem.split(","));
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
            {list.map((item)=>(
              <a href="#">
              {" "}
              <li>{item}</li>{" "}
            </a>
            ))}  
          </ul>
          <div className="nav-btn">contact us</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
