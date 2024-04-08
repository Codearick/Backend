import express from 'express'

const app = express();

require('dotenv').config();
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send(
        "<h1>This is the practice of Data Modelling in Mongoose</h1>"
    )
})




app.listen(port, () => {
    console.log("Example app listening on port ",port)
})

