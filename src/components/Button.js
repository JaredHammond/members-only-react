const Button = (props) => {
  const { onClick, text } = props;

  return (
    <button onClick={onClick} className="btn small-btn">
      {text}
    </button>
  );
};

export default Button;
