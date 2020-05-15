const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/',shopController.getHome);

router.get("/shop",shopController.getShop);

router.get("/shop/product/:productId",shopController.getProduct);

router.post("/shop/add-to-bag/:prodId",isAuth,shopController.postAddToBag) ;

router.get("/shop/add-to-wishlist/:prodId",isAuth,shopController.postAddToWishlist) ;

router.get("/user/wishlist",isAuth,shopController.getWishlist) ;

router.get("/user/bag",isAuth,shopController.getBag) ;

router.get("/user/bag/remove/:bagId",isAuth,shopController.getRemoveFromBag) ;

router.get("/user/bag/remove-and-add/:bagId",isAuth,shopController.getRemoveAndAdd) ;

router.get("/shop/remWishlist/:prodId",isAuth,shopController.getRemoveFromWishlist) ;

// men-section - anurag
// router.get("/shop/men",shopController.getProductsShopMen);

// router.get("/shop/men/:productId",shopController.getProductMen);

//     //topwear
// router.get('men-top-wear',shopController.getProductsMenTopWear);

//     router.get('/men-tshirts',shopController.getProductsMenTshirts);
//     router.get('/men-shirts',shopController.getProductsMenShirts);
//     router.get('/men-sweaters',shopController.getProductsMenSweaters);
//     router.get('/men-jackets',shopController.getProductsMenJackets);
//     router.get('/men-sweatshirts',shopController.getProductsMenSweatshirts);

//     //bottomwear
//     router.get('/men-bottomwear',shopController.getProductsMenBottomWear);
//     router.get('/men-jeans',shopController.getProductsMenJeans);
//     router.get('/men-trousers',shopController.getProductsMenTrousers);
//     router.get('/men-shorts',shopController.getProductsMenShorts);

//     //footwear
//     router.get('/men-footwear',shopController.getProductsMenFootWear);
//     router.get('/men-casual-shoes',shopController.getProductsMenCasualShoes);
//     router.get('/men-formals',shopController.getProductsMenFormals);
//     router.get('/men-sports',shopController.getProductsMenSports);


// //women-section - anurag
// router.get('/shop/women',shopController.getProductsShopWomen);

//     //westernwear
//     router.get('/women-western',shopController.getProductsWomenWesternWear);
//     router.get('/women-tops',shopController.getProductsWomenTops);
//     router.get('/women-jeans',shopController.getProductsWomenJeans);
//     router.get('/women-jackets-coats',shopController.getProductsWomenJacketsCoats);
//     router.get('/women-shrugs',shopController.getProductsWomenShrugs);

//     //indianwear
//     router.get('/women-indian',shopController.getProductsWomenIndianWear);
//     router.get('/women-kurtis',shopController.getProductsWomenKurtis);
//     router.get('/women-lehengas',shopController.getProductsWomenLehengas);
//     router.get('/women-sarees',shopController.getProductsWomenSarees);

//     //footwear
//     router.get('/women-footwear',shopController.getProductsWomenFootWear);    
//     router.get('/women-boots',shopController.getProductsWomenBoots);    
//     router.get('/women-flats',shopController.getProductsWomenFlats);    
//     router.get('/women-heels',shopController.getProductsWomenHeels);    
//     router.get('/women-casuals',shopController.getProductsWomenCasuals);    


// //Kids section
// router.get('/shop/kids',shopController.getProductsShopKids);

//     //Boys-clothing
//     router.get('/boys-clothing',shopController.getProductsBoysClothing);
//     router.get('/boys-tshirts',shopController.getProductsBoysTshirts);
//     router.get('/boys-shirts',shopController.getProductsBoysShirts);
//     router.get('/boys-shorts',shopController.getProductsBoysShorts);
//     router.get('/boys-jeans',shopController.getProductsBoysJeans);
//     router.get('/boys-jackets',shopController.getProductsBoysJackets);

//     //Boys-footwear
//     router.get('/boys-footwear',shopController.getProductsBoysFootWear);
//     router.get('/boys-casuals',shopController.getProductsBoysCasuals);
//     router.get('/boys-sports',shopController.getProductsBoysSports);
//     router.get('/boys-sandals',shopController.getProductsBoysSandals);

//     //Girls-clothing
//     router.get('/girls-clothing',shopController.getProductsGirlsClothing);    
//     router.get('/girls-tops',shopController.getProductsGirlsTops);    
//     router.get('/girls-tshirts',shopController.getProductsGirlsTshirts);    
//     router.get('/girls-jeans',shopController.getProductsGirlsJeans);    
//     router.get('/girls-jackets',shopController.getProductsGirlsJackets);    
//     router.get('/girls-capris',shopController.getProductsGirlsCapris); 

//     //Girls-footwear
//     router.get('/girls-footwear',shopController.getProductsGirlsFootwear); 
//     router.get('/girls-casuals',shopController.getProductsGirlsCasuals); 
//     router.get('/girls-flip-flops',shopController.getProductsGirlsFlipFlops); 
//     router.get('/girls-heels',shopController.getProductsGirlsHeels); 
//     router.get('/girls-flats',shopController.getProductsGirlsFlats);


module.exports = router;