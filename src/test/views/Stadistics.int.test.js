import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stadistics from '../../views/Stadistics';

describe('Stadistics integration tests', () => {
    it('should render title correctly', () => {
        render(<Stadistics />);
        const stadisticsComponent = screen.getByText('More than just shorter links');

        expect(stadisticsComponent).toBeInTheDocument();
    })

    it('should render button text correctly', () => {
        render(<Stadistics />);
        const stadisticsComponent = screen.getAllByText('Get Started');

        expect(stadisticsComponent).toHaveLength(2)
    })

    it('should render error when you clicked shorted button', () => {
		render(<Stadistics />);
		const stadisticsComponent = screen.getByText('Shorten it!');
		fireEvent.click(stadisticsComponent);

		const stadisticsError = screen.getByText('Ingrese una URL valida');
		expect(stadisticsError).toBeInTheDocument();
	});

    it('should render Advanced Statistics correctly', () => {
        render(<Stadistics />);
        const stadisticsComponent = screen.getByRole('heading', { name: 'Advanced Statistics' });

        expect(stadisticsComponent).toBeInTheDocument();
    });

    it('should render cards correctly', () => {
        render(<Stadistics />);

        expect(screen.getByText('Brand Recognition')).toBeInTheDocument();
        expect(screen.getByText('Detailed Records')).toBeInTheDocument();
        expect(screen.getByText('Fully Customizable')).toBeInTheDocument();
    })

})