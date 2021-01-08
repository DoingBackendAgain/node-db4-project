const express = require("express")
const rR = require("./router/recipieRouter")

const server = express()

server.use(express.json())

server.use("/recipies", rR)


const port = 9000;

server.listen(port,()=>{
    console.log(`Server is running at https://localhost${port}`)
})

module.exports = server