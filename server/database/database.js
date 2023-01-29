const mongoose = require("mongoose")
const {urlSchema} = require("./schemas")

mongoose.connect('mongodb://localhost:27017/url-shortener');
mongoose.set('strictQuery', true);

var shortURL = mongoose.model('short-urls', urlSchema)


function createURL(url, short) {
    console.log(url, short);
    const newurl = new shortURL({
        url:url,
        short:short
    })
    newurl.save()
}


module.exports = {createURL, shortURL};