const mongoose = require("mongoose")
const {urlSchema} = require("./schemas")

mongoose.connect('mongodb://127.0.0.1:27017/urlShortener');

let shortURL = mongoose.models.shortUrls || mongoose.model('shortUrls', urlSchema)


function createURL(url, short) {
    console.log(url, short);
    const newurl = new shortURL({
        url:url,
        short:short
    })
    newurl.save()
}


module.exports = {createURL, shortURL};