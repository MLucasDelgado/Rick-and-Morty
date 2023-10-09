import SearchBar from '../searchBar/SearchBar.jsx';
import Button from '../button/Button.jsx';
import style from './Nav.module.css'


const Nav = ({onSearch}) => {
    
    return(
        <div className={style.nav}>
            <nav className={style.navContainer}>
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