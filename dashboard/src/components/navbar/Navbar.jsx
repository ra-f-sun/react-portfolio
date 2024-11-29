import axios from 'axios'
import { useState,useEffect } from 'react'


const Navbar = () => {

  let [menuItem, setMenuItem]=useState("")
  let [buttonText, setButtonText]=useState("")
  let [buttonShow, setButtonShow]=useState(false)
  let [id,setId]=useState("")

  let handleSubmit = () =>{

    if(id){
      axios.put("http://localhost:3000/navbar/"+id,{
        menuItem: menuItem,
      buttonText: buttonText,
      buttonShow: buttonShow,
      }).then(res=>{
      console.log(res);
    }).catch(err=>{ 
      console.log(err);
    })
    }else{
      axios.post("http://localhost:3000/navbar", {
      menuItem: menuItem,
      buttonText: buttonText,
      buttonShow: buttonShow,
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
}
    

  let handleMenuItemChange = (e)=>{
    
    setMenuItem(e.target.value)
  }

  let handleButtonTextChange = (e)=>{
    
    setButtonText(e.target.value)
  }

  let handlebuttonShowChange = (e)=>{
   
    setButtonShow(e.target.checked)
  }


  useEffect(()=>{
    async function fetchData(){
      let data = await axios.get('http://localhost:3000/navitem')       
      setMenuItem(data.data.menuItem.split(","));
      setButtonText(data.data.buttonText)
      setButtonShow(data.data.buttonShow)
      setId(data.data._id)
    }
    fetchData()
  },[])

  return (
    <div className='nav-container'>
      <h4>Input your logo</h4>
      <input type="file" /><br />
      <input value={menuItem} onChange={handleMenuItemChange} type="text" placeholder="menu item"/><br />
      <input value={buttonText} onChange={handleButtonTextChange} type="text" placeholder="button text"/><br />
      <input checked={buttonShow} onChange={handlebuttonShowChange} type="checkbox" name="" id="" /> button show <br />
      <button onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default Navbar