function UserInput(props) {
    const { type, placeholder, label, name } = props;

    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                className="text-input"
                type={type}
                placeholder={placeholder || ''}
                name={name}
            />
        </div>
    )
}

export default UserInput;
