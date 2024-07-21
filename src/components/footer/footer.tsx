//style
import './footer.sass';

export interface footerProps {
    name: string
    email: string
    phone: string
    copyright: string
}

const Footer: React.FC<footerProps> = (props) => {

    const {
        name,
        email,
        phone,
        copyright
    } = props

    return (
        <footer className='footer'>

            <ul className='footer__list'>
                <p>{name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </ul>

            <p className='footer__copyright'>{copyright}</p>

        </footer>
    );
};

export default Footer;