const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = 5500;
const MONGODB_URI = 'mongodb+srv://nitishramaraj:{PASSWORD}@vitrendz.wmmielx.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())

const productRouter = require('./routes/products')
app.use('/products', productRouter)

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

