import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Profile from "./views/Profile";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import NewMessage from "./views/NewMessage";
import Homepage from "./views/Homepage";
import Layout from "./views/Layout";
import DeleteUser from "./views/DeleteUser";
import DeleteMessage from "./views/DeleteMessage";

function RouteSwitch() {

    return (
        <BrowserRouter>  
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="user/" element={<Profile />} />
                    <Route path="user/delete/" element={<DeleteUser />} />
                    <Route path="signup/" element={<SignUp />} />
                    <Route path="login/" element={<Login />} />
                    <Route path="message/new" element={<NewMessage />} />
                    <Route path="message/:messageId/delete" element={<DeleteMessage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;