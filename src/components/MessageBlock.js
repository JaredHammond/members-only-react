import { Link } from "react-router-dom";
import { DateTime } from "luxon";

function MessageBlock(props) {
  const { message, user } = props;

  const formattedDate = DateTime.fromISO(message.timestamp).toLocaleString(
    DateTime.DATETIME_SHORT
  );

  function isAuthorOrAdmin() {
    if (!user) {
      return false;
    }
    return user._id === message.user._id || user.is_admin;
  }

  return (
    <div className="message-block">
      <h3 className="message-title">{message.title}</h3>
      <p className="message-body">{message.message}</p>
      <p className="message-user">{message.user.name}</p>
      <p className="message-date">{formattedDate}</p>
      {isAuthorOrAdmin() && (
        <Link
          to={`/message/${message._id}/delete`}
          className="actions fas fa-trash-alt"
        />
      )}
    </div>
  );
}

export default MessageBlock;
