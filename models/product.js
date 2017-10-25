var mongoose=require('mongoose');

var product_schema=mongoose.Schema;

var productSchema=new product_schema({
    productId : {type:Number},
    product_name: {type:String},
    image_url: {type:String},
    product_brand: {type: String},
    product_type: {type:String},
    product_price: {type:Number},
    created_at : {type: Date, default: Date.now() },
    updated_at : {type: Date }
});


var Product=mongoose.model('product',productSchema);

module.exports=Product;
