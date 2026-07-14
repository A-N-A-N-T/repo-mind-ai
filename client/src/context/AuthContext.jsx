import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";


import {
    login as loginApi,
    getProfile,
    logout as logoutApi,
} from "../api/auth.api";

import { TOKEN_KEY } from "../utils/constants";


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        initializeAuth();

    }, []);

    async function initializeAuth() {

        const token = localStorage.getItem(TOKEN_KEY);

        if (!token) {

            setLoading(false);

            return;

        }

        try {

            const response = await getProfile();

            setUser(response.data);

        } catch (error) {

            logoutApi();

            setUser(null);

        } finally {

            setLoading(false);

        }

    }


async function login(email, password) {

    const response = await loginApi({
        email,
        password,
    });

    const token = response.data.token;

    localStorage.setItem(
        TOKEN_KEY,
        token
    );

    const profile = await getProfile();

    setUser(profile.data);

    return true;
}


function logout() {

    logoutApi();

    setUser(null);

}

    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                isAuthenticated: !!user,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}


export default AuthContext;