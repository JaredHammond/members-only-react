import Messages from "../components/Messages";
import Header from "../components/Header";
import BigButton from "../components/BigButton";
import { useEffect, useState } from "react";

const isLoggedIn = false

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3500/messages', {
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => setMessages(data))
  }, [])
  
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <section className="card center">
        <h1>Welcome to Members Only</h1>
        <p>You can share a message, but only members get to see who sent it!</p>
      </section>
      {isLoggedIn && <BigButton />}
      <Messages messages={messages} />
    </div>
  );
}

export default App;
