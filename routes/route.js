var express=require('express');

var router=express.Router();
var userController=require('../controllers/userControllers');
var productController=require('../controllers/productControllers');

router.route('/v1/user/create')
      .post(userController.postuserDetails);
router.route('/v1/user/getAllUser')
      .get(userController.getAllUser);

router.route('/v1/product/create')
      .post(productController.postProductDetails);
router.route('/v1/product/getAllproducts')
      .get(productController.getAllproducts);

module.exports=router;
