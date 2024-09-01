const express = require("express")
const app = express()
const mainRouter = require("./src/routers/mainRouter")
const PORT = 3030

app.use(express.static(__dirname + "/public"))
app.use(mainRouter)

app.set("views", __dirname + "/src/views")
app.set("view engine", "ejs")

app.listen(PORT, console.log(`running server on port ${PORT}`));