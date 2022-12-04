const express = require("express")
const bodyparser = require("body-parser")
const fs = require("fs")
const app = express()
const router = require("./router/router")
const dbdata = require("./data.json")
const { fstat } = require("fs")
const jsonparse = bodyparser.json()
const urlencode = bodyparser.urlencoded({extended:false})
//const router = express.Router()

app.use(urlencode)
app.use(jsonparse)
app.listen(3000)
//app.use("/",router)

app.get("/users",(req,res)=>{

    console.log("working")
    const data = dbdata
    
    res.send(data)

})

// router.post("/users",(req,res)=>{
//     res.send(200)
// })

app.post("/user",(res,req)=>{
    console.log(dbdata)
dbdata.push(res.body)
console.log(dbdata)

fs.writeFile("data.json",JSON.stringify(dbdata),()=>{

})

     req.sendStatus(200)

})

app.put("/user:id",(req, res)=>{
    console.log(req.params.id)
    dbdata.forEach((item,index,arr)=>{
      if ( item.name == req.params.id){
        console.log(item,"+++++++++")
        item.name = req.body.name
      }


    })

})

app.delete("/user:id",(req, res)=>{
    console.log(req.params.id)
    dbdata.forEach((item,index,arr)=>{
      if ( item.name == req.params.id){
        console.log(item,"+++++++++")
        item.splice(index,1)
        
      }


    })

})






