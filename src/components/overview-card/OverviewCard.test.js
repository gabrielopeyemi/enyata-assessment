import React from 'react';
import { render } from '@testing-library/react';
import OverviewCard from './OverviewCard';

describe('OverviewCard', () => {

  test('renders title', () => {
    const data = { count: 123 };
    const title = 'Title';
    const { getByTestId } = render(<OverviewCard data={data} title={title} />);
    const HeaderElement = getByTestId('title')
    expect(HeaderElement).toBeInTheDocument();
  });

  test('renders title', () => {
    const data = { count: 123 };
    const title = 'Title';
    const { getByTestId } = render(<OverviewCard data={data} title={title} />);
    const HeaderElement = getByTestId('card')
    expect(HeaderElement).toBeInTheDocument();
  });

  test('renders title', () => {
    const data = { count: 123 };
    const title = 'Title';
    const { getByTestId } = render(<OverviewCard data={data} title={title} />);
    const HeaderElement = getByTestId('card-body')
    expect(HeaderElement).toBeInTheDocument();
  });

  test('renders title', () => {
    const data = { count: 123 };
    const title = 'Title';
    const { getByTestId } = render(<OverviewCard data={data} title={title} />);
    const HeaderElement = getByTestId('count')
    expect(HeaderElement).toBeInTheDocument();
  });

  test('renders title', () => {
    const data = { count: 123 };
    const title = 'Title';
    const { getByTestId } = render(<OverviewCard data={data} title={title} />);
    const HeaderElement = getByTestId('description')
    expect(HeaderElement).toBeInTheDocument();
  });

});
