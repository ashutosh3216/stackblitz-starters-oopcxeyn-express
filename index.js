const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Endpoint 1: Calculate the total price of items in the cart
app.get("/cart-total", (req, res) => {
    const newItemPrice = parseFloat(req.query.newItemPrice) || 0;
    const cartTotal = parseFloat(req.query.cartTotal) || 0;
    const total = newItemPrice + cartTotal;
    res.send(total.toString());
});

// Endpoint 2: Apply a discount based on membership status
app.get("/membership-discount", (req, res) => {
    const cartTotal = parseFloat(req.query.cartTotal) || 0;
    const isMember = req.query.isMember === "true";
    const discount = isMember ? cartTotal * 0.1 : 0;
    const finalPrice = cartTotal - discount;
    res.send(finalPrice.toString());
});

// Endpoint 3: Calculate tax on the cart total
app.get("/calculate-tax", (req, res) => {
    const cartTotal = parseFloat(req.query.cartTotal) || 0;
    const tax = cartTotal * 0.05;
    res.send(tax.toString());
});

// Endpoint 4: Estimate delivery time based on shipping method
app.get("/estimate-delivery", (req, res) => {
    const shippingMethod = req.query.shippingMethod;
    const distance = parseFloat(req.query.distance) || 0;
    let deliveryDays;
    
    if (shippingMethod === "standard") {
        deliveryDays = Math.ceil(distance / 50);
    } else if (shippingMethod === "express") {
        deliveryDays = Math.ceil(distance / 100);
    } else {
        return res.status(400).send("Invalid shipping method");
    }
    
    res.send(deliveryDays.toString());
});

// Endpoint 5: Calculate the shipping cost based on weight and distance
app.get("/shipping-cost", (req, res) => {
    const weight = parseFloat(req.query.weight) || 0;
    const distance = parseFloat(req.query.distance) || 0;
    const shippingCost = weight * distance * 0.1;
    res.send(shippingCost.toString());
});

// Endpoint 6: Calculate loyalty points earned from a purchase
app.get("/loyalty-points", (req, res) => {
    const purchaseAmount = parseFloat(req.query.purchaseAmount) || 0;
    const loyaltyPoints = purchaseAmount * 2;
    res.send(loyaltyPoints.toString());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
