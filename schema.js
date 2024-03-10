const mongoose = require('mongoose');


// For the Product Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product_category',
        required: true
    },
    inventory_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'product_inventory'
    },
    price:{
      type:Number,
        required:true
    },
    discount:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'discount'
    },
        deleted_at: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' },
    });


module.exports = mongoose.model('product', productSchema);



// For the ProductCategory Schema
const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    desc: {
        type: String,
        trim: true
    },

        deleted_at: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' },
    });

module.exports = mongoose.model('product_category', productCategorySchema);


// Product Inventory Schema

const productInventorySchema = new mongoose.Schema({
        quantity: {
            type: Number,
            required: true,
        },
        deleted_at: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' },
    });

module.exports = mongoose.model('product_inventory', productCategorySchema);


//Discount Schema

const discountSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        desc: {
            type: String,
            trim: true
        },
    discount_percent:{
      type:Number,
        required:true,
    },
    active:{
      type:Boolean,
      required:true
    },

        deleted_at: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' },
    });

module.exports = mongoose.model('discount', productCategorySchema);
