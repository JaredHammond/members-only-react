const Header = (props) => {
  const { isLoggedIn } = props;
  let loginArea;

  if (isLoggedIn) {
    loginArea = (
      <>
        <button className="nav-btn" type="submit">
          Profile
        </button>
        <button className="nav-btn" type="submit">
          Logout
        </button>
      </>
    );
  } else {
    loginArea = (
      <>
        <button className="nav-btn" type="submit">
          Signup
        </button>
        <button className="nav-btn" type="submit">
          Login
        </button>
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
