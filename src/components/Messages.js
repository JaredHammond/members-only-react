import MessageBlock from "./MessageBlock";

const Messages = (props) => {
  const { messages, user } = props;

  return (
    <>
      {messages.map((message, index) => {
        return <MessageBlock key={message._id} message={message} user={user} />;
      })}
    </>
  );
};

export default Messages;
