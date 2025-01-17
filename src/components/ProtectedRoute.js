import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                    }}
                />
            )
        }
    />
);
export default ProtectedRoute;
