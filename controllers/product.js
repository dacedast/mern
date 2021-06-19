const Product = require('../models/Product');

exports.create = async (req, res) => {
    const {productOrder, productName, productDesc, productVideo, productHomework, productCategory} = req.body;

    try {
        let product = new Product();
        product.productOrder = productOrder;
        product.productName = productName;
        product.productDesc = productDesc;
        product.productVideo = productVideo;
        product.productHomework = productHomework;
        product.productCategory = productCategory;

        await product.save();
        res.json({
            successMessage: `${productName} was created!`,
            product
        })
    } catch(err) {
        console.log(err, 'productController.create error');
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
}

exports.readAll = async (req, res) => {
    try {
        const products = await Product.find({}).populate('productCategory', 'category')
        res.json({products});
    } catch(err) {
        console.log(err, 'productController.readAll error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}
exports.delete = async (req, res) => {
    try {
        const productId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        res.json(deletedProduct);
    } catch(err) {
        console.log(err, 'productController.delete error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}