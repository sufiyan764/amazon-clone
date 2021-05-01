const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
let secretKey = "sk_test_51IlyKUSFeMT0LUMIcPH550xlSWLAUjfWppuSY4MYOWkLt";
secretKey = secretKey + "dwgMXTOeoIbpw4dvyaAXW03iG5uHvjAYPYSOQ4CZ4hZ000hhFT987";
const stripe = require("stripe")(secretKey);

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello worlds"));

app.post("/payments/create", async (request, response) => {
  const total = Math.ceil(request.query.total);
  console.log("Payment request recieved for this amount >>>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units of USD
    currency: "usd",
    description: "Software development services",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: 98140,
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);


