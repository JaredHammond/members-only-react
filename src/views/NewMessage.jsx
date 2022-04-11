import Header from "../components/Header";
import UserInput from "../components/UserInput";
import Button from "../components/Button";

const NewMessage = (props) => {
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
              name="message-body"
              label="Message"
              type="textarea"
            />
            <Button 
              text="Submit"
              type="submit"
            />
          </form>
        </main>
        </>
      );
}

export default NewMessage;