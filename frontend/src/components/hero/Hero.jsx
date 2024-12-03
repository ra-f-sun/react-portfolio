import { useState,useEffect } from "react";
import axios from "axios"

const Hero = () => {
  const [subHeading, setSubHeading]=useState("")
  const [heading,setHeading]=useState("")
  const [bodyText,setBodyText]=useState("")
  const [buttonText, setButtonText]=useState("")

  useEffect(()=>{async function fetchData(){
    let data= await axios.get("http://localhost:3000/heroitem")
    setSubHeading(data.data.subHeading)
    setHeading(data.data.heading)
    setBodyText(data.data.bodyText)
    setButtonText(data.data.buttonText)
  }
  fetchData()
    
  },[])
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left-text">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <span>{subHeading}</span>
            <h1>{heading}</h1>
            <p>
              {bodyText}
            </p>
            <div className="hero-btn">{buttonText}</div>
          </div>
          <div className="hero-img">
            <img src="images/hero-img.jpg" alt="hero-img.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
