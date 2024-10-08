const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
    res.render("../views/shop/cart", {
        path: '/cart',
        pageTitle: "Cart",
    })
};

exports.getCheckout = (req, res, next) => {
    res.render("../views/shop/checkout", {
        path: '/checkout',
        pageTitle: "Checkout",
    })
}