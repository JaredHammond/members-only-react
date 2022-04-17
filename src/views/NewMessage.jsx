import UserInput from "../components/UserInput";
import Button from "../components/Button";
import ErrorDisplay from "../components/ErrorDisplay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewMessage = (props) => {
  const navigate = useNavigate();
  const [validationErrs, setValidationErrs] = useState([]);
  const [formInfo, setFormInfo] = useState({
    post_title: "",
    post_body: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    async function postMessage() {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3500/message/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formInfo),
      });
      const data = await response.json();

      if (data.code !== 201) {
        setValidationErrs(data.messages);
        return;
      }
      setValidationErrs([]);
      navigate('/')
    }

    postMessage();
  }

  return (
    <>
      <h1>New Message</h1>

      <ErrorDisplay errors={validationErrs} />

      <form onSubmit={handleSubmit}> 
        <UserInput
          name="post_title"
          label="Title:"
          type="text"
          value={formInfo.post_title}
          onChange={handleInputChange}
        />
        <div className="form-group">
          <label htmlFor="body">Message:</label>
          <textarea value={formInfo.post_body} onChange={handleInputChange} name='post_body' className="text-input" placeholder='Enter message here...' />
        </div>
        <Button 
          text="Submit"
          type="submit"
        />
      </form>
    </>
  );
}

export default NewMessage;