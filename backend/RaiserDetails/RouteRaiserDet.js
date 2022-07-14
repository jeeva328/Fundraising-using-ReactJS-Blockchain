const express = require("express")
const Router = express.Router()
const raiserdet = require("./SchemaRaiserDet")

Router.get("/", async(req, res) => {
    const raisedet = await raiserdet.find()
    res.status(200).json(raisedet)
})

Router.post("/", async(req, res) => {
    console.log("In post :", req.body)
    var raisedet = await raiserdet.create({
        firstName: req.body.data1.val.firstName,
        lastName: req.body.data1.val.lastName,
        address1: req.body.data1.val.address1,
        mobile: req.body.data1.val.mobile,
        city: req.body.data1.val.city,
        state: req.body.data1.val.state,
        zip: req.body.data1.val.zip,
        country: req.body.data1.val.country,
        Needfirstname: req.body.data2.val.Needfirstname,
        Needlastname: req.body.data2.val.Needlastname,
        description: req.body.data2.val.description,
        Purpose: req.body.data2.val.Purpose,
        Name: req.body.data3.val.Name,
        wallet_address: req.body.data3.val.wallet_address,
        amount: req.body.data3.val.amount,
        expDate: req.body.data3.val.expDate,
    })
    const rdet = await raisedet.save();
    res.status(200).json(rdet)
})

Router.put("/", async(req, res) => {
    console.log("raised----", req.body);
    const updateDetial = await raiserdet.updateMany({ _id: req.body._id }, { $set: { raised: req.body.raised } })
    res.status(200).json(updateDetial)
})

Router.delete("/", async(req, res) => {
    console.log("it is in delete")
    console.log(req.body)
    const delet = await raiserdet.deleteOne({ _id: req.body._id })
    res.status(200).json(delet)
})

module.exports = Router