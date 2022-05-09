import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../../components/Footer';

describe('Footer', () => {
    it('should render footer correctly', () => {
        render(<Footer/>)
        const footerComponent = screen.getByRole('heading');

        expect(footerComponent).toBeInTheDocument();
    })

    it('should render github text correctly', () => {
		render(<Footer />);
		const footerComponent = screen.getByText(/Github/);

        expect(footerComponent).toBeInTheDocument()
	})

    it('should render instagram text correctly', () => {
        render(<Footer />);
        const footerComponent = screen.getByText(/Instagram/);

        expect(footerComponent).toBeInTheDocument()
    })

    it('should render portafolio text correctly', () => {
        render(<Footer />);
        const footerComponent = screen.getByText(/Portafolio/);

        expect(footerComponent).toBeInTheDocument()
    })

})
