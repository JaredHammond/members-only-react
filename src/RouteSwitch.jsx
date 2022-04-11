import { BrowserRouter , Routes, Route } from "react-router-dom";
import App from "./views/App";
import Profile from "./views/Profile";
import SignUp from "./views/SignUp";
import Login from "./views/Login";

function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;