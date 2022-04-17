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
import { useUserAuth} from './hooks/useUserAuth'

function RouteSwitch() {
    const { updateUser } = useUserAuth()

    useEffect(() => {

      async function verifyToken() {
        const authToken = localStorage.getItem('token');
  
        if (authToken) {
          fetch("http://localhost:3500/verifyToken", 
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: authToken }),
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            if (data.code === 200) {
              updateUser(data.user);
            } else {
              localStorage.removeItem('token');
            }
          });
        }
      }
      verifyToken()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

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