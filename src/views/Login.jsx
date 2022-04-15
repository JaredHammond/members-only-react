import UserInput from "../components/UserInput";
import Button from "../components/Button"
import Header from "../components/Header";
import ErrorDisplay from "../components/ErrorDisplay";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [validationErrs, setValidationErrs] = useState([]);
  const [formInfo, setFormInfo] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:3500/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    });
    let data = await response.json();
    console.log(data);
  }

  return (
    <>
    <Header isLoggedIn={false} />
    <main>
      <h1>Login</h1>

      <ErrorDisplay errors={validationErrs} />

      <form onSubmit={handleSubmit}> 
        <UserInput
          name="username"
          label="Username:"
          type="text"
          value={formInfo.username}
          onChange={handleInputChange}
        />
        <UserInput
          name="password"
          label="Password:"
          type="password"
          value={formInfo.password}
          onChange={handleInputChange}
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
