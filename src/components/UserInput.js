function UserInput(props) {
  const { type, placeholder, label, name, value, onChange } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="text-input"
        type={type}
        placeholder={placeholder || ""}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default UserInput;
