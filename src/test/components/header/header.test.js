import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../../components/Header';

describe('Header', () => {
    it('should render header correctly', () => {
        render(<Header />)
        const headerContainer = screen.getByRole('heading')

        expect(headerContainer).toBeInTheDocument();
    })

    it('should render the alt text when the image not render', () => {
        render(<Header />)
        const headerContainer = screen.getByAltText(/Working/);

        expect(headerContainer).toBeInTheDocument();
    })
})
