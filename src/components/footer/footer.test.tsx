import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Footer, { footerProps } from './footer';

describe('Footer component', () => {

    const props: footerProps = {
        name: 'Glem2003',
        email: 'jQk5r@example.com',
        phone: '+886 0902329910',
        copyright: 'Copyright © 2024. All rights reserved.'
    }

    beforeEach(() => {
        render(<Footer {...props} />);
    });

    //check name
    test('renders name correctly', () => {
        const names = screen.queryAllByText(/Glem2003/i);
        expect(names.length).toBe(1); 
        expect(names[0]).toBeInTheDocument();
    });

    //check email
    test('renders email correctly', () => {
        const email = screen.getByText(/jQk5r@example.com/i);
        expect(email).toBeInTheDocument();
    });

    //check phone
    test('renders phone correctly', () => {
        const phone = screen.getByText(/\+886 0902329910/i);
        expect(phone).toBeInTheDocument();
    });

    //check copyright
    test('renders copyright correctly', () => {
        const copyright = screen.getByText(/Copyright © 2024. All rights reserved./i);
        expect(copyright).toBeInTheDocument();
    });

});