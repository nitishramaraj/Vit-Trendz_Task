const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 5500;

const productRoutes = require('./controllers/products/productRoute');

app.use(bodyParser.json());

const MONGODB_URI = 'mongodb+srv://nitishramaraj:Nitish123@counsailia.wmmielx.mongodb.net/?retryWrites=true&w=majority'

app.use("/product", productRoutes);
app.get("/", (req, res) => res.send("Welcome to the E-Commerce Product API!"));
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(result => {
        app.listen(PORT);
        console.log(`Listening on PORT : ${PORT}`);
    })
    .catch(err => {
        console.log(err);
    });
