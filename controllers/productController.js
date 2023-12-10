const ProductModel = require ("../models/product");


// making a controller to insert data related to a new product
exports.createProduct = async (req, res) => {
    try {
        const {title, description, price, imgUrl} = req.body;

        let newProduct = new ProductModel ({
            title, //title: title,
            description, //description: description,
            price, //price: price,
            imgUrl, //imgUrl: imgUrl,
        });
        newProduct = await newProduct.save();
    
        res.status(200).json(newProduct); //200 is a status code which means successful response
    } catch (e) {
        res.status(500).json ({ error: e.message }); //500 status code means server error
    }
};

// making a controller to fetch all my products from the database
exports.products = async (req, res) => {
    try {
        const products = await ProductModel.find ({});
        res.status(200).json (products);
    } catch (e) {
        res.status(500).json ({error : e.message});
    }
};

// making a controller to find a particular product using id
exports.singleProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const singleProduct = await ProductModel.findById (productId);
        if (!singleProduct) {
            return res.status(404).json ({ message : "No such product is found!"});
        }
        res.status(200).json (singleProduct);
    } catch (e) {
        res.status(500).json ({error : e.message});
    }
};

// making a controller to delete a particular product using id
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        await ProductModel.findByIdAndRemove (productId);
        res.status(200).json ({message : `Product with id ${productId} is deleted successfully!`});
    } catch (e) {
        res.status(500).json ({error : e.message});
    }
};

// making a controller to update a particular product using id
exports.updateProduct = async (req, res) => {
    try {
        const {title, description, price, imgUrl} = req.body;
        const productId = req.params.id;

        let updatedProduct = new ProductModel ({
            title, //title: title,
            description, //description: description,
            price, //price: price,
            imgUrl, //imgUrl: imgUrl,
            _id: productId, //_id: productId,
        });
        await ProductModel.findByIdAndUpdate (productId, updatedProduct);
        res.status(200).json ({message : `Product with id ${productId} is updated successfully!`});
    } catch (e) {
        res.status(500).json ({error : e.message});
    }
};