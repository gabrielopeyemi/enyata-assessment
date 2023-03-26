import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('renders with a label and input element', () => {
    const { getByTestId } = render(<Input title="title" type="text" onChange={() => {}} value="" />);
    const inputElement = getByTestId('input');
    const labelElement = getByTestId('label');

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<Input title="title" type="text" onChange={onChangeMock} value="" />);
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
