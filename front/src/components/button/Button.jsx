import { Link } from "react-router-dom";

const Button = ({ link, text }) => {
    return(
        <Link to={link}>
            <button>
                {text}
            </button>
        </Link>
    )
}

export default Button;