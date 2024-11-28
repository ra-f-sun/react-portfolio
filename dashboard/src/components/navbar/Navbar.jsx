import axios from 'axios'

const Navbar = () => {
let handleSubmit = () =>{
  axios.post("http://localhost:3000/navbar", {
    menuItem:"Yeeeee!,Ami,Statically,Menu,Change,Koira,Felsi"
  }).then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })
}

  return (
    <div className='nav-container'>
      <h4>Input your logo</h4>
      <input type="file" /><br />
      <input type="text" placeholder="menu item"/><br />
      <input type="text" placeholder="button text"/><br />
      <button onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default Navbar