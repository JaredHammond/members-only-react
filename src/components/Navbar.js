import { Link } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

const Navbar = () => {
  const { user, logoutUser } = useUserAuth();
  let loginArea;

  if (user) {
    loginArea = (
      <>
        <Link className="nav-btn" to="/user">
          Profile
        </Link>
        <button className="nav-btn" onClick={logoutUser}>
          Logout
        </button>
      </>
    );
  } else {
    loginArea = (
      <>
        <Link className="nav-btn" to="/signup">
          Sign Up
        </Link>
        <Link className="nav-btn" to="/login">
          Login
        </Link>
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
