// const express = require("express")
// const app = express.Router()
// const dbdata = require("../domain/read")
// const bodyparser = require("body-parser")
// const jsonparse = bodyparser.json()
// const urlencode = bodyparser.urlencoded({extended:false})
// const insertdata = require("../domain/insert")
// const fs = require("fs")


// //middleware
// app.use(urlencode)
// app.use(jsonparse)




// //routers

// //get
// app.get("/users",(req,res)=>{

//     console.log("syame mandi")
//     const data = dbdata
    
//     res.send(data)

// })


// //post
// app.post("/users",(req,res)=>{

// const data = req.body
// console.log(data)
// insertdata(data)



// // a(actualdata)
// res.sendStatus(201)
// })




// module.exports = app
