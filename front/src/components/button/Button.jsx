import { Link } from "react-router-dom";
import style from './Button.module.css'

const Button = ({ link, text, classname }) => {
    return(
        <Link to={link} className={classname}>
            <button className={style.boton}>
                {text}
            </button>
        </Link>
    )
}

export default Button;