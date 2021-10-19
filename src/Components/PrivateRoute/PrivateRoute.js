import { Route, Redirect } from "react-router";

const ProtectedRoute = ({ children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem('user') === 'true' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;