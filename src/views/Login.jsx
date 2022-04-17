import UserInput from "../components/UserInput";
import Button from "../components/Button"
import ErrorDisplay from "../components/ErrorDisplay";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserAuthContext } from "../hooks/useUserAuth";

const Login = () => {
  const navigate = useNavigate();
  const [validationErrs, setValidationErrs] = useState([]);
  const UserContext = useContext(UserAuthContext);
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
    const errors = await UserContext.loginUser(formInfo)

    if (errors) {
      setValidationErrs(errors.messages)
    }
    
    setValidationErrs([]);
    navigate('/')

  }

  return (
    <>
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
    </>
  );
};

export default Login;
