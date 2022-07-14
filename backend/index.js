const express = require("express")
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser');
const mongoose = require("mongoose")
const Raiserdet = require("./RaiserDetails/RouteRaiserDet")
const signup = require("./Register/routereg")
const login = require("./login")

app.use(bodyParser.json());
app.use(cors())

app.use("/Raiserdet", Raiserdet)
app.use("/signup", signup)
app.use("/Login", login)

//mongoose.set("useNewUrlParser", true)
//mongoose.set("useUnifiedTopology", true)
//mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost:27017/weunite", (err) => {
    if (err) { console.log("error") } else { console.log("connected") }
})


app.listen(2000, () => {
    console.log("Running port 2000");
})