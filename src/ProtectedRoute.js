import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    let auth = {'token':false}
    !localStorage.getItem("token")? auth.token=false:auth.token = true;
    return(
        <Route {...rest}>
                {!auth.token
                    ?
                    <Redirect to="/login" /> 
                    : 
                    children}
        </Route>
    )
}

export default PrivateRoute;