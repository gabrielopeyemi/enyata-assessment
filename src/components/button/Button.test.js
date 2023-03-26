import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders with the correct title', () => {
    const { getByTestId } = render(<Button title="Click me!" />);
    const buttonElement = getByTestId('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe('Click me!');
  });

  it('calls the onClick function when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<Button title="Click me!" onClick={mockOnClick} />);
    const buttonElement = getByTestId('button');

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
