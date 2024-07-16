//style
import './header.sass';

//component
import { ImGithub } from "react-icons/im";

export interface headerProps {
    title: string
    logoLink: string
    lists?: string[]
    linkTarget?: string
}

const Header: React.FC<headerProps> = (props) => {

    const {
        title,
        logoLink,
        lists,
        linkTarget
    } = props

    return (
        <header className='header'>

            <h2 className="header__title">{title}</h2>

            <ul className='header__menu'>
                {lists && lists.map((list, index) => (
                    <li className='header__list' key={index}>{list}</li>
                ))}
            </ul>

            <div className='header__logo'>
                <a href={logoLink} target={linkTarget}>
                    <ImGithub />
                </a>
            </div>

        </header>
    );
};

export default Header;