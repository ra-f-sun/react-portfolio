import { useEffect,useState } from "react";
import axios from "axios"

const Service = () => {

  // let [title,setTitle]=useState("")
  // let [bodyText, setBodyText]=useState("")
  // let [id, setId]=useState("")
  let [list,setList]=useState([])
  
  useEffect(()=>{
      axios.get("http://localhost:3000/service").then(res=>{
        setList(res.data)
      })
        
    
  },[])

  return (
    <section id="service">
      <div className="container">
        <div className="service-wrapper">
          <div className="service-title">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <h4>My services</h4>
          </div>
          <h1>Service I Offer</h1>
          <div className="service-items">
            {list.map((item)=>(
              // eslint-disable-next-line react/jsx-key
              <div className="service-card">
              <img src="images/service-icon1.png" alt="" />
              <h3>{item.title}</h3>
              <p>
                {item.bodyText}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
