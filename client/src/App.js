import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ProfilePage from "./components/pages/ProfilePage";
import Trending from './components/pages/Trending';
import FeedPage from "./components/pages/FeedPage";
import ChatPage from "./components/pages/ChatPage";
import UserUploadPage from "./components/pages/UserUploadPage";
import NavbarPage from "./components/pages/NavbarPage";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/feed" component={FeedPage} />
          <PrivateRoute exact path="/chat" component={ChatPage} />
          <PrivateRoute exact path="/upload" component={UserUploadPage} />
          <PrivateRoute exact path="/trending" component={Trending} />
          <PrivateRoute exact path="/navbar" component={NavbarPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
