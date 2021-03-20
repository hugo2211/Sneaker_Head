const express = require("express");
const routes = require("./routes");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const stripe = require('stripe')('pk_test_51IX6VIAfExOBYstVZkqhs76wY1xMrZ5Hwh0SgLZDOvYwDgFHRrnMKh8cNfRVtNVIounGjq9Wejc5oGj23B9IKw5m00hbsBcph6');
app.use(express.static('.'));

const connection = require("./config/connection");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view soemthing
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use(routes);

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });
  res.json({ id: session.id });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});