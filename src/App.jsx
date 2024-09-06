import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import useAuthStore from './store/authStore';
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Loading from "./components/Loading.jsx";
import { useEffect } from "react";
import Settings from "./components/Settings.jsx";
import Notifications from "./components/Notifications.jsx";

function App() {

    const { isLoggedIn, checkAuthState, loading } = useAuthStore();

    useEffect(() => {
        checkAuthState();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Router basename="/Reporter">
                <Routes>
                    <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}/>
                    <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login"/>}/>
                    <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login"/>}/>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                </Routes>
                <Notifications />
            </Router>
        </>
    )
}

export default App
