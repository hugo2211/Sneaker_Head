import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import LandingPage from "./components/pages/LandingPage";
import ProfilePage from "./components/pages/ProfilePage";
import FeedPage from "./components/pages/FeedPage";
import ChatPage from "./components/pages/ChatPage";
import UserUploadPage from "./components/pages/UserUploadPage";
import EditPostPage from "./components/pages/EditPostPage";
import OtherUserPage from "./components/pages/OtherUserPage";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import './App.css';


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
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/feed" component={FeedPage} />
          <PrivateRoute exact path="/chat" component={ChatPage} />
          <PrivateRoute exact path="/upload" component={UserUploadPage} />
          <PrivateRoute exact path="/post/edit/:id" component={EditPostPage} />
          <PrivateRoute exact path="/profile/:userId" component={OtherUserPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
