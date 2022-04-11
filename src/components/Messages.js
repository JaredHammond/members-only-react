import MessageBlock from "./MessageBlock";

const Messages = (props) => {
  const { messages } = props;

  return (
    <>
      {messages.map((message, index) => {
        return <MessageBlock key={index} message={message} />;
      })}
    </>
  );
};

export default Messages;
