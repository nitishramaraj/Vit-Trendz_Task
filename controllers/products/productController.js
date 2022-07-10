const Product = require('../../models/product/productModel');

exports.getAll = (req, res, next) => {

    Product.find({})
        .then(prodDocs => {
            console.log("Entered the fucntion!");
            return (prodDocs);
        })
};

exports.addProduct = (req, res, next) => {
    const { addName, addPrice, addDescription, addDate } = req.body;

    const newProd = new Product({
        name = addName,
        price = addPrice,
        description = addDescription,
        date = addDate
    })
}

