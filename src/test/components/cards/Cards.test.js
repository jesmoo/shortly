import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom';
import Cards from '../../../components/Cards';

describe('Cards', () => {

    it('should render the header correctly', () => {
        render(<Cards url='' titles='Test' texts='Test text'/>);

        const cardComponent = screen.getByText(/Test text/);

        expect(cardComponent).toBeInTheDocument();
    });

    it('should render correctly titles', () => {
        render(<Cards url='' titles='Test' texts='Test text' />);
        const cardComponent = screen.getByRole('heading');

		expect(cardComponent).toBeInTheDocument();
    })

});
