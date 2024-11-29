const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Navbar = require('./model/navbarModel')

mongoose.connect('mongodb+srv://1999rafsun:JUHP6XuOMK5EUqpe@cluster0.dzkic.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

app.use(cors())
app.use(express.json())

app.post("/navbar", function (req, res) {
  console.log(req.body);
  let data=new Navbar(req.body)
  data.save()
  res.send(data)
  
});

app.get("/navitem",async function(req,res){
  let data = await Navbar.findOne({})
  res.send(data)
})

app.put("/navbar/:id", function (req, res) {
  console.log(req.params.id)
  console.log(req.body);
  Navbar.findByIdAndUpdate(req.params.id,req.body).then(()=>{
    res.send({message: "navbar updated"})
  })
});

app.listen(3000);
