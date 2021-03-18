import { Redirect, Route } from "react-router-dom";
import Navbar from "../nav/Navbar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <div>
            <Navbar {...props} />
            <Component {...props} />
          </div>
          
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;