import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
    it('renders without crashing', () => {
        const { getByAltText } = render(<Logo />)
        const siteLogo = getByAltText('Logo');
        expect(siteLogo).toBeInTheDocument()
    })

})