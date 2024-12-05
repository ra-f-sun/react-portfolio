import { useEffect, useState } from "react"
import axios from "axios"

const Service = () => {
  let [title,setTitle]=useState("")
  let [bodyText, setBodyText]=useState("")
  // let [id, setId]=useState("")
  let [list,setList]=useState([])

  let handleTitleChange = (e)=>{
    setTitle(e.target.value)
  }

  let handleBodyTextChange = (e)=>{
    setBodyText(e.target.value)
  }

  let handleSubmit = ()=>{
    axios.post("http://localhost:3000/service",{
        title:title,
        bodyText:bodyText,
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }

  let handleDelete= (item)=>{
    console.log(item._id)
    axios.delete("http://localhost:3000/service/"+item._id).then((res)=>{
      console.log(res.data)
    })
  }

  useEffect(()=>{
      axios.get("http://localhost:3000/service").then(res=>{
        setList(res.data)
      })
        
    
  },[])

  return (
    <>
    <div className="service-container">
      <h4>Service Section</h4>
      <input type="file" /><br />
      <input value={title} onChange={handleTitleChange} type="text" placeholder="Enter your service title"/><br />
      <input value={bodyText} onChange={handleBodyTextChange} type="text" placeholder="Enter your service text"/><br />
      <button onClick={handleSubmit}>Submit</button>

      
    </div>
    <h1>Service Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Img preview</th>
            <th>Title</th>
            <th>Description</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {list.map((item,index)=>(
            // eslint-disable-next-line react/jsx-key
            <tr>
            <td>{index+1}</td>
            <td><img src="https://via.placeholder.com/100" alt="Service Preview"/></td>
            <td>{item.title}</td>
            <td>{item.bodyText}</td>
            
            <td className="action-buttons">
              <button className="update-btn" >Update</button>
              <button onClick={()=>handleDelete(item)} className="delete-btn" >Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      </>
  )
}

export default Service