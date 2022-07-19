const express = require('express')
const cors = require('cors')
const app = new express()
app.use(express.json())
app.use(cors())


const ProductRouter = require("./routes/productsRoutes")
app.use("/products", ProductRouter);

module.exports = app;