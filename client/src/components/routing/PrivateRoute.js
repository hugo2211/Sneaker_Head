import { Redirect, Route } from "react-router-dom";
import Navbar from "../nav/Navbar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <div className="landing-page-background">
            <div className="page-cover">
              <Navbar {...props} />
              <Component {...props} />
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
