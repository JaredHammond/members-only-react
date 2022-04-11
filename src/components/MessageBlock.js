function MessageBlock(props) {
  const { message } = props;

  return (
    <div className="message-block">
      <h3 className="message-title">{message.title}</h3>
      <p className="message-body">{message.message}</p>
      <p className="message-user">{message.user}</p>
      <p className="message-date">{message.date}</p>
    </div>
  );
}

export default MessageBlock;
