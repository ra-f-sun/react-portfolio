import { useState,useEffect } from "react"
import axios from "axios"

const Hero = () => {
  const [subHeading, setSubHeading]=useState("")
  const [heading,setHeading]=useState("")
  const [bodyText,setBodyText]=useState("")
  const [buttonText, setButtonText]=useState("")
  const [id,setId]=useState("")

  const handleSubmit= ()=>{

    if(id){
      axios.put("http://localhost:3000/hero/"+id,{
      subHeading:subHeading,
      heading:heading,
      bodyText:bodyText,
      buttonText:buttonText
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    }else{
    axios.post("http://localhost:3000/hero",{
          subHeading:subHeading,
          heading:heading,
          bodyText:bodyText,
          buttonText:buttonText
        }).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
    }

    
  }

  useEffect(()=>{
    async function fetchData(){
      let data = await axios.get('http://localhost:3000/heroitem')   
      console.log(data)    
      setSubHeading(data.data.subHeading)
      setHeading(data.data.heading)
      setBodyText(data.data.bodyText)
      setButtonText(data.data.buttonText)
      setId(data.data._id)
    }
    fetchData()
  },[])

  const handleSubHeadingChange =(e)=>{
    setSubHeading(e.target.value)
  }

  const handleHeadingChange=(e)=>{
    setHeading(e.target.value)
  }

  const handleBodyTextChange=(e)=>{
    setBodyText(e.target.value)
  }

  const handleButtonText=(e)=>{
    setButtonText(e.target.value)
  }

  return (
    <div className="hero-container">
      <h2>Hero section</h2>
      <input type="file" placeholder="Upload image"/><br />
      <input value={subHeading} onChange={handleSubHeadingChange} type="text" placeholder="Enter your subheading" /><br />
      <input value={heading} onChange={handleHeadingChange} type="text" placeholder="Enter your heading" /><br />
      <input value={bodyText} onChange={handleBodyTextChange} type="text" placeholder="Enter your body text" /><br />
      <input value={buttonText} onChange={handleButtonText} type="text" placeholder="Enter your button text" /><br />
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Hero