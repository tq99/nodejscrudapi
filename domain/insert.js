const { json } = require("body-parser")
const dbdata =  require("./data.json")
const fs = require("fs")
function test (data){ 
    data = {
        "name":"jj"
    }
    console.log(data)
    dbdata.push(data)
    console.log(dbdata,"++++")
  const actualdata =   JSON.stringify(dbdata)
  console.log(actualdata,"+++++++++++")

    fs.writeFile("data.json",actualdata,(err)=>{
        console.log(err)
    })
    
  
}

test()





module.exports = function(data){ 
    console.log(data)
    dbdata.push(data)
    console.log(dbdata,"++++")
  const actualdata =   JSON.stringify(dbdata)
  console.log(actualdata,"+++++++++++")

 fs.writeFile("data.json",actualdata,()=>{

 })
var writeStream = fs.createWriteStream("JournalDEV.txt");
writeStream.write("Hi, JournalDEV Users. ");
writeStream.write("Thank You.");
writeStream.end();
  
}


