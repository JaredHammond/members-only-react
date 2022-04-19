import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Button from "../components/Button"


function DeleteMessage(props) {
  const navigate = useNavigate();
  const { messageId } = useParams();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function getMessage() {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/message/${messageId}`,{
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        const data = await response.json()
        setMessage(data)
      }
    }

    getMessage()
  }, [])

  async function handleDeleteMessage() {
    const response = await fetch(`https://jaredhammond.dev/members-only/api/message/${messageId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })

    if (response.status === 200) {
      navigate('/');
    }
  }
  
  if (!message) {
    return null
  } else {
    return (
      <>
        <h1>Delete Message</h1>
        <p>Are you sure you want to delete this message? It cannot be undone.</p>
        <div className="message-block">
          <h3 className="message-title">{message.title}</h3>
          <p className="message-body">{message.message}</p>
          <p className="message-user">{message.user.name}</p>
          <p className="message-date">{message.date}</p>
        </div>
        <Button onClick={handleDeleteMessage} text='Delete Message' />
      </>
    )
  }


}

export default DeleteMessage;
