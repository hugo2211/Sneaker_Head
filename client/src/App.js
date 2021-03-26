import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import LandingPage from "./components/pages/LandingPage";
import ProfilePage from "./components/pages/ProfilePage";
import Trending from './components/pages/Trending';
import FeedPage from "./components/pages/FeedPage";
import ChatPage from "./components/pages/ChatPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import Success from "./components/pages/Success";
import UserUploadPage from "./components/pages/UserUploadPage";
import EditPostPage from "./components/pages/EditPostPage";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import './App.css';

const stripePromise = loadStripe(`pk_test_51IX6VIAfExOBYstVZkqhs76wY1xMrZ5Hwh0SgLZDOvYwDgFHRrnMKh8cNfRVtNVIounGjq9Wejc5oGj23B9IKw5m00hbsBcph6`); 

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <Elements stripe= { stripePromise } >
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/feed" component={FeedPage} />
          <PrivateRoute exact path="/chat" component={ChatPage} />
          <PrivateRoute exact path="/upload" component={UserUploadPage} />
          <PrivateRoute exact path="/trending" component={Trending} />
          <PrivateRoute exact path="/checkout" component={CheckoutPage} />
          <PrivateRoute exact path="/success" component={Success} />
          <PrivateRoute exact path="/post/edit/:id" component={EditPostPage} />
        </Switch>
      </Router>
    </ThemeProvider>
    </Elements>
  );
}

export default App;
