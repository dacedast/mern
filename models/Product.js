const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
    {
        productOrder: {
            type: String,
            required: true,
            trim: true,
        },
        productName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 60
        },
        productDesc: {
            type: String,
            trim: true,
        },
        productVideo: {
            type: String,
            required: true,
            trim: true,
        },
        productHomework: {
            type: String,
            trim: true,
        },
        productCategory: {
            type: ObjectId,
            ref: 'Category',
            required: true,
            trim: true,
        },
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;