import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";
import { useEffect, useState } from "react";

function Layout() {

  const { updateUser } = useUserAuth()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {

    async function verifyToken() {
      const authToken = localStorage.getItem('token');

      if (authToken) {
        fetch(`${process.env.REACT_APP_API_URI}verifyToken`, 
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
          if (data.code === 200) {
            updateUser(data.user);
          } else {
            localStorage.removeItem('token');
          }
        });
      }
      setIsLoaded(true);
    }
    verifyToken()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoaded) {
    return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
    )
  }
  return null 
}

export default Layout;