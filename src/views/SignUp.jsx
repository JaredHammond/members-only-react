import UserInput from "../components/UserInput";
import Button from "../components/Button"
import Header from "../components/Header";

const SignUp = () => {
  return (
    <>
    <Header isLoggedIn={false} />
    <main>
      <h1>Sign Up</h1>

      <form onSubmit={(e)=> e.preventDefault()}> 
        <UserInput
          name="first_name"
          label="First Name:"
          type="text"
        />
        <UserInput
          name="family_name"
          label="Family Name:"
          type="text"
        />
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
        <UserInput
          name="passwordConfirm"
          label="Confirm Password:"
          type="password"
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
