import { Link } from 'react-router-dom';

//style
import './header.sass';

export interface headerProps {
    lists?: { to: string, text: string }[]
}

const Header: React.FC<headerProps> = (props) => {

    const {
        lists,
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

        </header>
    );
};

export default Header;