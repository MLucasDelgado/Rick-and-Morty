import SearchBar from '../searchBar/SearchBar.jsx';
import Button from '../button/Button.jsx';
import style from './Nav.module.css'


const Nav = ({ onSearch }) => {

    return (
        <div className={style.nav}>
            <nav className={style.navContainer}>
                <div className={style.contenedor}>
                    <Button link={'/home'} text='Home' />
                    <Button link={'/about'} text='About' />
                    <Button link={'/fav'} text='Favorites' />
                    <Button link={'/login'} text='Logout' />
                </div>
                <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )
}

export default Nav;