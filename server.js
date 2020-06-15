const express = require("express")

const app = express();

app.use("/",express.static(__dirname + "/public"))

app.listen(4545,()=>{
    console.log("Server Started on http://localhost:4545")
})
