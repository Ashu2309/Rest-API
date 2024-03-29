const express = require('express');
require('dotenv').config();
const cors = require('cors');
require("./src/db/conn")
const Achievement = require("./src/models/men")
const app = express()
app.use(cors());
const port = process.env.PORT || 8000;
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello from Ashutosh")
})


app.post("/achievement/create", async (req, res) => {
    try {
        const insertData = new Achievement(req.body)
        const dataAchievement = await insertData.save();
        res.send(dataAchievement).status(201)
    } catch (error) {
        console.log(error)
        res.send(error).status(400)
    }
})

app.get("/achievement/getlist", async (req, res) => {
    try {
        const getData = await Achievement.find({})
        res.send(getData).status(201)
    } catch (error) {
        console.log(error)
        res.send(error).status(400)
    }
})

app.get("/achievement/get/:id", async (req, res) => {
    try {
        const getData = await Achievement.findById(req.params.id)
        res.send(getData).status(201)

    } catch (error) {
        console.log(error)
        res.send(error).status(400)
    }
})

app.patch("/achievement/update/:id", async (req, res) => {
    try {
        const updateData = await Achievement.findByIdAndUpdate(req.params.id, req.body)
        res.send(updateData).status(201)

    } catch (error) {
        console.log(error)
        res.send(error).status(400)
    }
})

app.delete("/achievement/delete/:id", async (req, res) => {
    try {
        const deleteData = await Achievement.findByIdAndDelete(req.params.id)
        res.send(deleteData).status(200)
    } catch (error) {
        res.send(error).status(400)

    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})