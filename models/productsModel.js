const { json } = require("express");
const fs = require("fs");
const dir = require("../utils/dirRoot");
module.exports = class Product {
  constructor(title, img, price, description) {
    this.title = title;
    this.img = img;
    this.price = price;
    this.description = description;
    this.id = Math.random().toString().split(".")[1];
  }

  static retrieveAllProducts() {
    const file = fs.readFileSync(dir("data", "products.json"), function (err, data) {
      return data;
    });
    return JSON.parse(file);
  }

  static reWriteFile(content) {
    fs.writeFileSync(dir("data", "products.json"), JSON.stringify(content), function () {});
  }

  saveNewProduct() {
    const file = JSON.parse(
      fs.readFileSync(dir("data", "products.json"), function (err, data) {
        return data;
      })
    );
    file.push({
      id: this.id,
      title: this.title,
      img: this.img,
      price: this.price,
      description: this.description,
      addedToCart: "no",
    });
    fs.writeFile(dir("data", "products.json"), JSON.stringify(file), function () {});
  }
};
