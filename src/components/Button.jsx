const Button = (props) => {
  const { onClick, text, type } = props;

  return (
    <button onClick={onClick} className="btn small-btn" type={type || "button"}>
      {text}
    </button>
  );
};

export default Button;
