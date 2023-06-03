const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    uploadProductImage
} = require('../controllers/products');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);
router.route('/:id/upload').post(uploadProductImage);

module.exports = router;