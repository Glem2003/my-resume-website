import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header, { headerProps } from './header';

describe('Header component', () => {
    const renderHeader = (props: headerProps) => {
        render(
            <BrowserRouter>
                <Header {...props} />
            </BrowserRouter>
        );
    };

    test('should render without crashing', () => {
        const navItems = [
            { to: '/', text: 'About' },
            { to: '/Resume', text: 'Resume' },
            { to: '/Projects', text: 'Projects' }
        ];

        renderHeader({ lists: navItems });

        navItems.forEach(item => {
            expect(screen.getByText(item.text)).toBeInTheDocument();
        });
    });

    test('should render correct links', () => {
        const navItems = [
            { to: '/', text: 'About' },
            { to: '/Resume', text: 'Resume' },
            { to: '/Projects', text: 'Projects' }
        ];

        renderHeader({ lists: navItems });

        navItems.forEach(item => {
            const linkElement = screen.getByText(item.text);
            expect(linkElement).toHaveAttribute('href', item.to);
        });
    });
});
