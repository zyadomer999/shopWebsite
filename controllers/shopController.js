const Product = require("../models/productsModel");

exports.showProducts = (req, res, next) => {
  const allProducts = Product.retrieveAllProducts();
  if (allProducts.length > 0) {
    res.render("shop/indexShop", {
      parent: "shop",
      pageTitle: "Shop",
      products: allProducts,
    });
  } else {
    res.render("shop/noProductsShop", { parent: "shop", pageTitle: "Shop" });
  }
};
