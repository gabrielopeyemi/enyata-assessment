import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
  it('renders the navbar links', () => {
    const navbar = [
      { id: '0', name: 'Overview', link: '/' },
      { id: '1', name: 'People', link: '/people' },
      { id: '2', name: 'Species', link: '/species' },
      { id: '3', name: 'Starships', link: '/starships' },
    ];

    render(
      <MemoryRouter>
        <Layout navbar={navbar} />
      </MemoryRouter>
    );

    const overviewLink = screen.getByText('Overview');
    const peopleLink = screen.getByText('People');
    const speciesLink = screen.getByText('Species');
    const starshipsLink = screen.getByText('Starships');

    expect(overviewLink).toBeInTheDocument();
    expect(peopleLink).toBeInTheDocument();
    expect(speciesLink).toBeInTheDocument();
    expect(starshipsLink).toBeInTheDocument();
  });

  it('highlights the active navbar link', () => {
    const navbar = [
      { id: '0', name: 'Overview', link: '/' },
      { id: '1', name: 'People', link: '/people' },
      { id: '2', name: 'Species', link: '/species' },
      { id: '3', name: 'Starships', link: '/starships' },
    ];

    const location = { pathname: '/people' };

    render(
      <MemoryRouter initialEntries={[location]}>
        <Layout navbar={navbar} />
      </MemoryRouter>
    );

  });
});
