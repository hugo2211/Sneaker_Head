const express = require("express");
const Stripe =  require("stripe");
const router = express.Router();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

const stripe = new Stripe(process.env.SECRET_KEY);

router.route('/payment_intents').get(function(req, res) {
    res.send("test")
}).post(asyncMiddleware(async (req, res, next) => {
    console.log(process.env.SECRET_KEY)
    try {
        const { amount } = req.body;
        // Psst. For production-ready applications we recommend not using the
        // amount directly from the client without verifying it first. This is to
        // prevent bad actors from changing the total amount on the client before
        // it gets sent to the server. A good approach is to send the quantity of
        // a uniquely identifiable product and calculate the total price server-side.
        // Then, you would only fulfill orders using the quantity you charged for.
  
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: "usd"
        });
  
  
        console.log(process.env.SECRET_KEY)
  
        res.status(200).send(paymentIntent.client_secret);
      } catch (err) {
        console.log(err)
        res.status(500).json({ statusCode: 500, message: err.message });
      }
}))

module.exports = router;