import Header from "../components/Header";
import UserInput from "../components/UserInput";
import Button from "../components/Button";

const NewMessage = (props) => {
    return (
        <>
        <Header isLoggedIn={false} />
        <main>
          <h1>New Message</h1>
    
          <form onSubmit={(e)=> e.preventDefault()}> 
            <UserInput
              name="title"
              label="Title:"
              type="text"
            />
            <div className="form-group">
              <label htmlFor="body">Message:</label>
              <textarea name='body' className="text-input" placeholder='Enter message here...' />
            </div>
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