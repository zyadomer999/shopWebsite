const Product = require("../models/productsModel");

exports.showIndexAdmin = (req, res) => {
  res.render("admin/indexAdmin", { parent: "admin", pageTitle: "Admin" });
};

exports.showAddProductAdmin = (req, res) => {
  res.render("admin/addProductAdmin", { parent: "admin", pageTitle: "Add Product" });
};

exports.addProduct = (req, res) => {
  const newProduct = new Product(
    req.body.title,
    req.body.img,
    req.body.price,
    req.body.description
  );
  newProduct.saveNewProduct();
  res.redirect("/admin/addProduct");
};

exports.showDeleteProducts = (req, res) => {
  const allProducts = Product.retrieveAllProducts();
  if (allProducts.length > 0) {
    res.render("admin/deleteProductsAdmin", {
      parent: "admin",
      pageTitle: "Delete Products",
      products: allProducts,
    });
  } else {
    res.render("admin/noProductsAdmin", { parent: "admin", pageTitle: "Delete Products" });
  }
};

exports.deleteProduct = (req, res) => {
  productId = req.params.productId;
  const refreshedProducts = [];
  const allProducts = Product.retrieveAllProducts();
  for (a of allProducts) {
    if (a.id != productId) {
      refreshedProducts.push(a);
    }
  }
  Product.reWriteFile(refreshedProducts);
  res.redirect("/admin/deleteProducts");
};

exports.showEditProducts = (req, res) => {
  const allProducts = Product.retrieveAllProducts();
  if (allProducts.length > 0) {
    res.render("admin/editProductsAdmin", {
      parent: "admin",
      pageTitle: "Delete Products",
      products: allProducts,
    });
  } else {
    res.render("admin/noProductsAdmin", { parent: "admin", pageTitle: "Edit Products" });
  }
};

exports.editProduct = (req, res) => {
  productId = req.params.productId;
  const allProducts = Product.retrieveAllProducts();
  theProduct = allProducts.find((element, index) => {
    return element.id == productId;
  });
  res.render("admin/editProductAdmin", {
    parent: "admin",
    pageTitle: "Edit Product",
    product: theProduct,
  });
};

exports.save = (req, res) => {
  productId = req.params.productId;
  const allProducts = Product.retrieveAllProducts();
  const updatedProducts = [];
  for (a of allProducts) {
    if (a.id != productId) {
      updatedProducts.push(a);
    } else {
      updatedProducts.push({
        id: a.id,
        title: req.body.title,
        img: req.body.img,
        price: req.body.price,
        description: req.body.description,
      });
    }
  }
  Product.reWriteFile(updatedProducts);
  res.redirect("/admin/editProducts");
};
