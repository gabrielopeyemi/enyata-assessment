import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Table from './Table';

describe('Table component', () => {
    const tableHeader = ['Header 1', 'Header 2', 'Header 3'];
    const headers = ['name', 'created', 'average_height'];
    const films = [
        {
            name: 'Film 1',
            created: '2022-01-01T00:00:00.000Z',
            average_height: 180,
            url: 'https://swapi.dev/api/films/1/',
        },
        {
            name: 'Film 2',
            created: '2022-02-01T00:00:00.000Z',
            average_height: 175,
            url: 'https://swapi.dev/api/films/2/',
        },
    ];

    it('renders snapshot correctly', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <Table title="Films" tableHeader={tableHeader} films={films} headers={headers} />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('displays correct number of rows', () => {
        render(
            <MemoryRouter>
                <Table title="Films" tableHeader={tableHeader} films={films} headers={headers} />
            </MemoryRouter>
        );
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(films.length + 1);
    });
});
