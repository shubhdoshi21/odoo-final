const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_CLIENT_SECRET);
const isLoggedIn = require("../middleware/isLoggedIn.js");

router.post("/create-checkout-session", [isLoggedIn], async (req, res) => {
  try {
    const { products } = req.body;
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
          images: [product.image],
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/paymentsuccess`,
      cancel_url: `${process.env.CLIENT_URL}/paymentfailed`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/paymentsuccess", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );
    const customer = await stripe.customers.retrieve(session.customer);

    // Handle post-payment success actions (e.g., save order to DB, send email)
    res.redirect(`${process.env.CLIENT_URL}/paymentsuccess`);
  } catch (error) {
    console.error("Error retrieving Stripe session:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/paymentfailed", (req, res) => {
  res.redirect(`${process.env.CLIENT_URL}/paymentfailed`);
});

module.exports = router;
