//content
import { footerContent } from "../content/index";

//component
import Footer from "./footer/footer";
import Header from "./header/header";

interface defaultPagesProps {
    children?: JSX.Element
}

const DefaultPages: React.FC<defaultPagesProps> = (props) => {

    const { copyright } = footerContent
    const { children } = props

    const navItems = [
        {
            to: '/',
            text: 'About'
        },
        {
            to: '/Resume',
            text: 'Resume'
        },
        {
            to: '/Projects',
            text: 'Projects'
        }
    ]

    return (
        <>
            <Header
                lists={navItems}
            />
            {children}
            <Footer
                copyright={copyright}
            />
        </>
    )
}

export default DefaultPages