import UserInput from "../components/UserInput";
import Button from "../components/Button"
import Header from "../components/Header";
import { useState } from "react";
import ErrorDisplay from "../components/ErrorDisplay";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [validationErrs, setValidationErrs] = useState([]);
  const [formInfo, setFormInfo] = useState({
    first_name: "",
    family_name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:3500/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    });
    let data = await response.json();
    console.log(data);
    if (data.code !== 201) {
      setValidationErrs(data.messages);
      return;
    }
    console.log('here')
    setValidationErrs([]);
    navigate("../login");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  }


  return (
    <>
    <Header isLoggedIn={false} />
    <main>
      <h1>Sign Up</h1>
      <ErrorDisplay errors={validationErrs} />
      <form onSubmit={handleSubmit}> 
        <UserInput
          name="first_name"
          label="First Name:"
          type="text"
          value={formInfo.first_name}
          onChange={handleInputChange}
        />
        <UserInput
          name="family_name"
          label="Family Name:"
          type="text"
          value={formInfo.family_name}
          onChange={handleInputChange}
        />
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
        <UserInput
          name="confirmPassword"
          label="Confirm Password:"
          type="password"
          value={formInfo.confirmPassword}
          onChange={handleInputChange}
        />
        <Button 
          text="Submit"
          type="submit"
        />
      </form>
    </main>
    </>
  );
};

export default SignUp;
