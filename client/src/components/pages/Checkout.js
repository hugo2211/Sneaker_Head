const Checkout = () => {
    return ( 
        <div className="container">
      <div class="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div class="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <button type="button" id="checkout-button">Checkout</button>
    </div>
  
  
     );
}
 
export default Checkout;

    
    var stripe = Stripe("pk_test_51IX6VIAfExOBYstVZkqhs76wY1xMrZ5Hwh0SgLZDOvYwDgFHRrnMKh8cNfRVtNVIounGjq9Wejc5oGj23B9IKw5m00hbsBcph6");
    var checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", function () {
      fetch("/create-checkout-session", {
        method: "POST",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          // If redirectToCheckout fails due to a browser or network
          // error, you should display the localized error message to your
          // customer using error.message.
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        })
    });
    ;
