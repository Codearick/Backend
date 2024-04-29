import express from "express"

const app = express();

const port = 8000;

app.get("/", (req, res) => {
    res.send(`<h1>On slash "/" route</h1>`)
})

app.get("/:username/:id", (req, res) => {
    console.log(req.params)
    res.send(`Hello this is params: ${req.params}`)
})

app.get("/search", (req, res) => {
    const {q} = req.query
    if(!q) {
        res.send("Nothing searched!")
    }
    res.send(`<h1>Searched : ${q}</h1>`)
})

app.get("*", (req, res) => {
    res.send(`This path doesn't exist!`)
})


app.listen(port, () => {
    console.log("app listening on port ",port)
})

app.use((req, res) => {
    console.log("Request received!")
    console.log("This is request: ",req);
    console.log("This is response: ",res);
})
