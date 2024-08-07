import { Link } from 'react-router-dom';

//style
import './style/header.sass';

//icon
import { AiOutlineCloseCircle } from '../../assets/icon/index'

//hook
import useMobileMenuActive from '../../hook/useMobileMenuActive';
import useIsMobile from '../../hook/useIsMobile';

//components
import LanguageSwitcher from './LanguageSwitcher';

interface headerProps {
    lists?: { to: string, text: string }[]
    headerMenuIcon?: React.ReactNode
}

const Header: React.FC<headerProps> = (props) => {

    const {
        lists,
        headerMenuIcon
    } = props

    const { isActive: handleMenuActive, handleClick: handleMenuClick } = useMobileMenuActive()
    const { isMobile } = useIsMobile()

    return (
        <header className='header'>

            {/* desktop menu */}
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

            {!isMobile && (<LanguageSwitcher />)}

            {/* mobile menu */}
            <div className='header__mobileMenu' onClick={handleMenuClick}>
                {handleMenuActive ? (<AiOutlineCloseCircle style={{ color: 'black' }}/>) : headerMenuIcon}
            </div>

            <main className='header__mobileMain'>

                <ul className='header__mobileItem'>
                    {lists && lists.map((list, index) => (
                        <li
                            key={index}
                            className='header__mobileList'
                        >
                            <Link to={list.to}>{list.text}</Link>
                        </li>
                    ))}
                </ul>

                {isMobile && (<LanguageSwitcher />)}

            </main>

        </header>
    );
};

export default Header;