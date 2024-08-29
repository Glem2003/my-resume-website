//hook
import { useTranslation } from 'react-i18next';

//icon
import { CgMenuHotdog } from "../../assets/icon/index";

//component
import Footer from "../footer/footer";
import Header from "../header/header";

interface defaultPagesProps {
    children?: JSX.Element
}

const DefaultPages: React.FC<defaultPagesProps> = (props) => {

    const { t } = useTranslation()

    const { children } = props

    const navItems = [
        {
            to: '/',
            text: t('header.list.0')
        },
        {
            to: '/resume',
            text: t('header.list.1')
        },
        {
            to: '/projects',
            text: t('header.list.2')
        }
    ]

    return (
        <>
            <Header
                lists={navItems}
                headerMenuIcon={<CgMenuHotdog />}
            />
            {children}
            <Footer
                copyright={t('footer.copyright')}
                version={t('footer.version')}
            />
        </>
    )
}

export default DefaultPages