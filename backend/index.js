const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Navbar = require('./model/navbarModel')
const Hero = require('./model/heroModel')
const Service = require('./model/serviceModel')

mongoose.connect('mongodb+srv://1999rafsun:JUHP6XuOMK5EUqpe@cluster0.dzkic.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

app.use(cors())
app.use(express.json())

// navbar methods started
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

// navbar methods ending

// hero methods starting
app.post("/hero", function (req, res) {
  console.log(req.body);
  let data=new Hero(req.body)
  data.save()
  res.send(data)  
});

app.get("/heroitem", async function (req,res) {
  let data = await Hero.findOne({})
  res.send(data)
})

app.put("/hero/:id", function (req, res) {
  console.log(req.params.id)
  console.log(req.body);
  Hero.findByIdAndUpdate(req.params.id,req.body).then(()=>{
    res.send({message: "Hero Updated"})
  })
});

// hero methods ending
// service methods
app.post("/service", function (req, res){
  console.log(req.body);
  let data = new Service(req.body)
  data.save()
  res.send({message: "service created"})
})

app.get("/service", async function (req, res) {
  let data = await Service.find({})
  console.log(data)
  res.send(data)  
})

app.delete("/service/:id", async function(req,res){
  let data = await Service.findByIdAndDelete(req.params.id)
  res.send({message: "Service deleted"})
})

// app.put("/service/:id", function(req,res){
//   Service.findByIdAndUpdate(req.params.id,req.body).then(()=>{
//     res.send({message: "service updated"})
//   })
// })

// service methods
app.listen(3000);
