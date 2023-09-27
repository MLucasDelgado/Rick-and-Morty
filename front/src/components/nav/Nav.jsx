import SearchBar from '../searchBar/SearchBar.jsx';
import Button from '../button/Button.jsx';


const Nav = ({onSearch}) => {
    
    return(
        <div>
            <nav>
                <Button link={'/home'} text='Home' />
                <Button link={'/about'} text='About' />
                <Button link={'/favorites'} text='Favorites'/>
                <Button link={'/'} text='Logout'/>
                <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )
}

export default Nav;