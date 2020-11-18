const Product = require("../models/productsModel");

exports.showCartIndex = (req, res) => {
  res.render("/cart/indexCart", { pageTitle: "Cart" });
};

exports.addToCart = (req, res) => {
  productId = req.params.productId;
  const allProducts = Product.retrieveAllProducts();
  const theProduct = allProducts.forEach((element) => {
    if (element.id == productId) {
      element.addedToCart = "yes";
    }
  });
  Product.reWriteFile(allProducts);
  res.redirect("/shop");
};

exports.removeFromCart = (req, res) => {
  productId = req.params.productId;
  const allProducts = Product.retrieveAllProducts();
  const theProduct = allProducts.forEach((element) => {
    if (element.id == productId) {
      element.addedToCart = "no";
    }
  });
  Product.reWriteFile(allProducts);
  res.redirect("/shop");
};
