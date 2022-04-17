import Messages from "../components/Messages";
import BigButton from "../components/BigButton";
import { useEffect, useState } from "react";
import { useUserAuth } from "../hooks/useUserAuth";


function Homepage() {
  const [messages, setMessages] = useState([]);
  const { user } = useUserAuth();

  useEffect(() => {
    const options = {
      method: "GET",
      mode: "cors",
    }

    if (user) {
      options.headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }

    fetch('http://localhost:3500/messages', options)
    .then(response => response.json())
    .then(data => setMessages(data))
  }, [user])
  
  return (
    <div className="App">
      <section className="card center">
        <h1>Welcome to Members Only</h1>
        <p>You can share a message, but only members get to see who sent it!</p>
      </section>
      {user && <BigButton />}
      <Messages messages={messages} user={user} />
    </div>
  );
}

export default Homepage;
