import { Link } from "react-router-dom";

const Header = (props) => {
  const { isLoggedIn } = props;
  let loginArea;

  if (isLoggedIn) {
    loginArea = (
      <>
        <Link className="nav-btn" to="/profile">Profile</Link>
        <Link className="nav-btn" to="/logout">Logout</Link>
      </>
    );
  } else {
    loginArea = (
      <>
        <Link className="nav-btn" to="/signup">Sign Up</Link>
        <Link className="nav-btn" to="/login">Login</Link>
      </>
    );
  }

  return (
    <nav className="navbar">
      <a href="/">
        <img
          alt="Members Only Logo"
          className="logo"
          src="/img/logo-monochrome.svg"
          tabIndex={-1}
        />
      </a>
      <div className="login-area">{loginArea}</div>
    </nav>
  );
};

export default Header;
