const express = require("express")
const {createURL, shortURL} = require("../database/database")
const mongoose = require("mongoose")
const router = express.Router()

router.get("/api/:shortURL",(req, res) => {
    shortURL.findOne({short: req.params.shortURL}).then((data) => {
        if (data) {
            res.redirect(data.url)
        } else {
            res.send("sex")
        }
    }) 
    // res.redirect("https://www.w3schools.com/js/js_dates.asp")
})
router.post("/api/newurl", (req, res) => {
    console.log(req.body.url);
    let date = Date.now()
    let short = date.toString(36) + Math.floor(Math.random() * 100)
    shortURL.findOne({url: req.body.url}).then((data) => {
        if (!data) {
            createURL(req.body.url, short.toString())
            res.json(short)
        } else {
            res.json(data.short)
        }
    })
})


module.exports = {router};