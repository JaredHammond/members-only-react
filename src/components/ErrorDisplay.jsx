function ErrorDisplay(props) {
  if (!props.errors?.length) {
    return null;
  }

  return (
    <div className="error-display">
      <ul>
        {props.errors.map((err, i) => (
          <li key={i}>{err.msg || err}</li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorDisplay;