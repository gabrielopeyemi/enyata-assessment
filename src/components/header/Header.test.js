import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {


  test('renders without showBackButton prop', () => {
    render(<Header />);
    const backButton = screen.queryByTestId('header-back-button');
    expect(backButton).not.toBeInTheDocument();
  });

  test('renders notification icon', () => {
    render(<Header />);
    const notificationIcon = screen.getByTestId('notification-icon');
    expect(notificationIcon).toBeInTheDocument();
  });

  test('renders line icon', () => {
    render(<Header />);
    const lineIcon = screen.getByTestId('line-icon');
    expect(lineIcon).toBeInTheDocument();
  });

  test('renders user icon', () => {
    render(<Header />);
    const userIcon = screen.getByTestId('user-icon');
    expect(userIcon).toBeInTheDocument();
  });

  test('renders dots icon', () => {
    render(<Header />);
    const dotsIcon = screen.getByTestId('dots-icon');
    expect(dotsIcon).toBeInTheDocument();
  });

  test('renders user name', () => {
    render(<Header />);
    const userName = screen.getByText('John Doe');
    expect(userName).toBeInTheDocument();
  });
});
