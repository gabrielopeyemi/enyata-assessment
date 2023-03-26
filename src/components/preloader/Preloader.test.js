import { render, screen } from '@testing-library/react';
import Preloader from './Preloader';

test('renders loading image', () => {
  render(<Preloader />);
  const loadingImage = screen.getByAltText('loader');
  expect(loadingImage).toBeInTheDocument();
});