import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../api';
import Layout from '../components/layout/Layout';
import Table from '../components/table/Table';
import Preloader from './../components/preloader/Preloader'

export default function Species() {
  const tableHeader = [
    'checkbox',
    'Name',
    'Birth year',
    'Gender',
    'Hair Color',
    'Height',
    'Created'
  ];

  const { data, error } = useSWR('/people', fetcher)

  if (error) return <div>Failed to load data</div>
  if (!data) return <Preloader />

  return (
    <Layout>
      <Table 
        title='Starships' 
        tableHeader={tableHeader} 
        films={data.results}
        headers={['name', 'birth_year', 'gender', 'hair_color', 'height', 'created']}
      />
    </Layout>
  )
}
