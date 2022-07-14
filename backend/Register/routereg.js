const express = require("express")
const Router = express.Router()
const signup = require("./schemareg")

Router.get("/", async(req, res) => {
    const signupp = await signup.find()
    res.status(200).json(signupp)
})

Router.post("/", async(req, res) => {
    console.log("In post :", req.body)
    var signupp = await signup.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password
    })
    const reg = await signupp.save();
    res.status(200).json(reg)
})

module.exports = Router