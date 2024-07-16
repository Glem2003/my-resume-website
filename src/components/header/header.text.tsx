import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from './header';

describe('renders Header with correct text', () => {

    const props = {
        title: 'My Resume',
        logoLink: 'https://github.com/Glem2003',
        lists: ['Home', 'About', 'Contact'],
        linkTarget: '_blank'
    }

    beforeEach(() => {
        render(<Header {...props} />);
    });

    //check title
    test('renders title correctly', () => {
        const title = screen.getByText(/My Resume/i);
        expect(title).toBeInTheDocument();
    });

    //check lists
    test('renders lists correctly', () => {
        props.lists.forEach(item => {
            const listItem = screen.getByText(item);
            expect(listItem).toBeInTheDocument();
        });
    });

    //check logo
    test('renders logo with correct link', () => {
        const logoLink = screen.getByRole('link');
        expect(logoLink).toHaveAttribute('target', '_blank');
        expect(logoLink).toHaveAttribute('href', 'https://github.com/Glem2003');
    });
    
});