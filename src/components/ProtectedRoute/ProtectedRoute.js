import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, loggedIn, ...props }) => {
//     return (
//         <Route {loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />} />
//     )
// }

const ProtectedRoute = ({ loggedIn, children }) => {
    if (!loggedIn) {
        return <Navigate to="/signin" replace />;
    }

    return children;
};

export default ProtectedRoute;