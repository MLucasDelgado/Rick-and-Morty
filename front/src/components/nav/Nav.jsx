import SearchBar from '../searchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

const Nav = ({onSearch}) => {
    return(
        <div>
            <nav>
                <SearchBar onSearch={onSearch} />
                <button>
                    <Link to={'/about'}>
                        About
                    </Link>
                </button>

                <button>
                    <Link to={'/home'}>
                        Home
                    </Link>
                </button>
                
            </nav>
        </div>
    )
}

export default Nav;