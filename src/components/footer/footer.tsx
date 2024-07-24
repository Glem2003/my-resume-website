//style
import './footer.sass';

export interface footerProps {
    copyright: string
}

const Footer: React.FC<footerProps> = (props) => {

    const {
        copyright
    } = props

    return (
        <footer className='footer'>

            <p className='footer__copyright'>{copyright}</p>

        </footer>
    );
};

export default Footer;