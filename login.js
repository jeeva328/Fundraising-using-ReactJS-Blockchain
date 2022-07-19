const express = require("express")
const router = express.Router()
const register = require("./Register/schemareg")
    // const bcrypt = require("bcrypt");
router.post("/", async(req, res) => {
    console.log(req.body);
    // try {
    var Userdata = await register.findOne({ email: req.body.email });
    console.log("user data:", Userdata)
    if (!Userdata) {
        return res.status(200).json({ err: "Username Not Exists" });
    }
    console.log("password : ", Userdata.password)
        // var validation = await bcrypt.compare(req.body.password, Userdata.password);
    if (req.body.password !== Userdata.password) {
        return res.status(200).json({ err: "Password Incorrect" });
    }
    // } catch () {
    // res.status(404).json();
    // }
    var usernme = req.body.username
    var password = req.body.password
    res.status(200).json({ err: null, redirect: "/Profile", id: req.body.walletAddress });
});
module.exports = router