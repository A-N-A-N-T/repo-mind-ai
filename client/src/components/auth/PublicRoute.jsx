import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import FullScreenLoader from "../common/FullConnectLoader";

function PublicRoute({ children }) {

    const { isAuthenticated, loading } = useAuth();

    if (loading) {

        return <FullScreenLoader />;

    }

    if (isAuthenticated) {

        return <Navigate to="/dashboard" replace />;

    }

    return children;

}

export default PublicRoute;