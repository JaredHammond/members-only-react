import NavLink from "./Styled/NavLink";
import { useUserAuth } from "../hooks/useUserAuth";
import { Link } from "react-router-dom"

const Navbar = () => {
  const { user, logoutUser } = useUserAuth();
  let loginArea;

  if (user) {
    loginArea = (
      <>
        <NavLink link="/user">
          Profile
        </NavLink>
        <NavLink forwardedAs="button" onClick={logoutUser} >
          Logout
        </NavLink>
      </>
    );
  } else {
    loginArea = (
      <>
        <NavLink link="/signup">
          Sign Up
        </NavLink>
        <NavLink link="/login">
          Log In
        </NavLink>
      </>
    );
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          alt="Members Only Logo"
          className="logo"
          src="/img/logo-monochrome.svg"
          tabIndex={-1}
        />
      </Link>
      <div className="login-area">{loginArea}</div>
    </nav>
  );
};

export default Navbar;
