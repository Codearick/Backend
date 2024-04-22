import express from "express"

const app = express();

const port = 8000;

app.get("/", (req, res) => {
    res.send(html, <h1>On slash "/" route</h1>)
})

app.listen(port, () => {
    console.log("app listening on port ",port)
})