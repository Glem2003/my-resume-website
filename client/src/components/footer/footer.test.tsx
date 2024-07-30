import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Footer, { footerProps } from './footer';

describe('Footer component', () => {

    const props: footerProps = {
        copyright: 'Copyright © 2024. All rights reserved.'
    }

    beforeEach(() => {
        render(<Footer {...props} />);
    });

    //check copyright
    test('renders copyright correctly', () => {
        const copyright = screen.getByText(/Copyright © 2024. All rights reserved./i);
        expect(copyright).toBeInTheDocument();
    });

});