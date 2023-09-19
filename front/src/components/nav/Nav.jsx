import SearchBar from '../searchBar/SearchBar.jsx';

const Nav = ({onSearch}) => {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;