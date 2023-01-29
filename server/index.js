const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT;
const {router} = require("./routes/routes")
app.listen(PORT, () => {
    console.log("Server is running on port "+PORT);
})
app.use(cors())
app.use(express.json())
app.use(router)