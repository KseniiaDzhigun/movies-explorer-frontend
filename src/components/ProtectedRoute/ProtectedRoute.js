import { Navigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/Constants';

const ProtectedRoute = ({ loggedIn, children }) => {
    if (!loggedIn) {
        return <Navigate to={MAIN_ROUTE} replace />;
    }

    return children;
};

export default ProtectedRoute;