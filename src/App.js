import Messages from "./components/Messages";
import Header from "./components/Header";

const messages = [
  {
    title: "Test1",
    message: "This is a test message where I test things",
    user: "Jared",
    date: "3/1/14 12:15PM",
  },
  {
    title: "Test2",
    message: "This is the second test where things get tested",
    user: "Chanda",
    date: "10/21/2020 12:00AM",
  },
  {
    title: "Test3",
    message: "Why am I doing so many test?",
    user: "Robert",
    date: "12/12/12 12:12PM",
  },
  {
    title: "Test4",
    message: "I'm still just typing a whole lot \n and now I'm on a new line",
    user: "Nobody",
    date: "1/1/2020 1:43PM",
  },
];

function App() {
  return (
    <div className="App">
      <Header isLoggedIn={false} />
      <Messages messages={messages} />
    </div>
  );
}

export default App;
