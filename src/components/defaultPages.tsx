//component
import Header from "./header/header";

interface defaultPagesProps {
    children?: JSX.Element
}

const DefaultPages: React.FC<defaultPagesProps> = (props) => {

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
        </>
    )
}

export default DefaultPages