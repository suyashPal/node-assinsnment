var Product=require('../models/product');

exports.postProductDetails=function(request,response){
  var product=new Product({
    productId :   request.body.productId,
    product_name: request.body.product_name,
    image_url:    request.body.image_url,
    product_brand:request.body.product_brand,
    product_type: request.body.product_type,
    product_price:request.body.product_price,
    created_at :  new Date(),
    updated_at :  request.body.updated_at
  });


  product.save((error,res)=>{
      if(error)
      return error;
      else {
          response.json({
            success:true,
            body:res
          })
      }
  });
}
  exports.getAllproducts=function(request,response){
    Product.find({},(error,res)=>{
      if(error)
      response.json(error);
    response.json(res);
    });



}
