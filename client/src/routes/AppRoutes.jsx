import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import PublicRoute from "../components/auth/PublicRoute";
import NotFound from "../pages/NotFound";



function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <Home />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={<ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>}
                />

                <Route
                    path="/repository/:id"
                    element={<ProtectedRoute>
                        <Repository />
                    </ProtectedRoute>}
                />

                <Route
                    path="/repository/:id"
                    element={
                        <ProtectedRoute>
                            <Repository />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>



        </BrowserRouter>

    );

}

export default AppRoutes;