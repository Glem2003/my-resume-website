//style
import './footer.sass';

export interface footerProps {
    copyright: string
    version: string
}

const Footer: React.FC<footerProps> = (props) => {

    const {
        copyright,
        version
    } = props

    return (
        <footer className='footer'>

            <p className='footer__copyright'>{copyright}</p>
            <p className='footer__version'>{version}</p>
            
        </footer>
    );
};

export default Footer;