import UserInput from "../components/UserInput";
import Button from "../components/Button"
import Header from "../components/Header";

const Login = () => {
  return (
    <>
    <Header isLoggedIn={false} />
    <main>
      <h1>Login</h1>

      <form onSubmit={(e)=> e.preventDefault()}> 
        <UserInput
          name="username"
          label="Username:"
          type="text"
        />
        <UserInput
          name="password"
          label="Password:"
          type="password"
        />
        <Button 
          text="Login"
          type="submit"
        />
      </form>
    </main>
    </>
  );
};

export default Login;
