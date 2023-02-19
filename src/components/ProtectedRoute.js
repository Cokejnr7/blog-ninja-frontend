import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = JSON.parse(localStorage.getItem("user"));

  return <Route {...rest}>{auth ? children : <Redirect to="/login" />}</Route>;
};

export default PrivateRoute;
