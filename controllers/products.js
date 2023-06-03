const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({ price: { $gt: 30 } })
        .sort('name')
        .select('name price');

    res.status(200).json({ products, nbHits: products.length });
}
