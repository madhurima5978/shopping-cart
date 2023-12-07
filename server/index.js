const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/products')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/shop")

app.get('/', (req,res) => {
    UserModel.find({})
    .then(products => {
        const productsWithBase64Images = products.map(product => ({
            name: product.name,
            price: product.price,
            image: product.image.toString('base64'),
        }));
        res.json(productsWithBase64Images);
    })
    .catch(err => res.json(err))
})

app.post("/createUser", (req,res) => {
    UserModel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})