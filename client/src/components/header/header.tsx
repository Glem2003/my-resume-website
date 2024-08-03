import { Link } from 'react-router-dom';

//style
import './header.sass';
import LanguageSwitcher from './LanguageSwitcher';

export interface headerProps {
    lists?: { to: string, text: string }[]
    headerMenuIcon?: React.ReactNode
}

const Header: React.FC<headerProps> = (props) => {

    const {
        lists,
        headerMenuIcon
    } = props

    return (
        <header className='header'>

            <ul className='header__menu'>
                {lists && lists.map((list, index) => (
                    <li
                        key={index}
                        className='header__list'
                    >
                        <Link to={list.to}>{list.text}</Link>
                    </li>
                ))}
            </ul>

            <LanguageSwitcher />

            <div className='header__mobileMenu'>
                {headerMenuIcon}
            </div>

        </header>
    );
};

export default Header;