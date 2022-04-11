import { Link } from 'react-router-dom';

const NewMessage = () => {
    return (
        <Link className="btn new-message" to={'/message/new'}>Compose New Message</Link>
    )
}

export default NewMessage;