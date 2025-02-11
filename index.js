const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Endpoint 1: Calculate the total price of items in the cart
app.get("/cart-total", (req, res) => {
    let newItemPrice = parseFloat(req.query.newItemPrice);
    let cartTotal = parseFloat(req.query.cartTotal);
    let total = cartTotal + newItemPrice;
    res.send(total.toString());
});

// Endpoint 2: Apply a discount based on membership status
app.get("/membership-discount", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let isMember = req.query.isMember === "true";
    let discount = isMember ? cartTotal * 0.1 : 0;
    let finalPrice = cartTotal - discount;
    res.send(finalPrice.toString());
});

// Endpoint 3: Calculate tax on the cart total
app.get("/calculate-tax", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let tax = cartTotal * 0.05;
    res.send(tax.toString());
});

// Endpoint 4: Estimate delivery time based on shipping method
app.get("/estimate-delivery", (req, res) => {
    let shippingMethod = req.query.shippingMethod;
    let distance = parseFloat(req.query.distance);
    let days = shippingMethod === "express" ? distance / 100 : distance / 50;
    res.send(Math.ceil(days).toString());
});

// Endpoint 5: Calculate shipping cost based on weight and distance
app.get("/shipping-cost", (req, res) => {
    let weight = parseFloat(req.query.weight);
    let distance = parseFloat(req.query.distance);
    let cost = weight * distance * 0.1;
    res.send(cost.toString());
});

// Endpoint 6: Calculate loyalty points earned from a purchase
app.get("/loyalty-points", (req, res) => {
    let purchaseAmount = parseFloat(req.query.purchaseAmount);
    let points = purchaseAmount * 2;
    res.send(points.toString());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
