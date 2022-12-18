const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const quote = require("./ms3");
const { allowedNodeEnvironmentFlags } = require('process');
const port = process.env.PORT || '3000';
const app = express();

app.use(express.json());

app.post("/quote", async (req, res) => {
    const id = uuid();
    const car_value = req.body.car_value;
    const risk_rating = req.body.risk_rating;
    var premiumValues = new Array(2);

    if (!car_value || !risk_rating) {
        return res.sendStatus(400);
    }

    premiumValues = quote(car_value, risk_rating);

    var monthlyPremium = premiumValues[0];
    var yearlyPremium = premiumValues[1];


    await fs.mkdir("data/quote", { recursive: true });
    await fs.writeFile(`data/quote/${id}.txt`, "Car Value: " + car_value.toString() + "\n" + "Risk Rating: " + risk_rating.toString() + "\n" + "Monthly PremiumL: " + monthlyPremium.toString() + "\n" + "Yearly Premium: " + yearlyPremium.toString());
    console.log(monthlyPremium);

    res.status(201).json({
        id: id
    })
});

app.get("/quote/:id", async (req, res) => {
    const id = req.params.id;
    let quote;

    try {
        quote = await fs.readFile(`data/quote/${id}.txt`, "utf-8");
    } catch (err) {
        return res.sendStatus(404);
    }

    res.json({
        quote: quote
    });
});

app.listen(process.env.PORT, () => console.log("Running"));

//app.get('/', (req, res) => res.json({ message: 'Testing' }))
//app.get('/', (req, res) => {res.json({ message: 'Testing' });});
app.get("/", (req, res) => {
    res.sendFile("./index.html");
});