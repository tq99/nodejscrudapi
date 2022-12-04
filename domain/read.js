const dbdata = require("./data.json")

function getData(){
    console.log(dbdata)

    return dbdata

}

module.exports.dbdata = getData()