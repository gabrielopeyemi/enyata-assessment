import React from 'react';
import useSWR from 'swr'
import { fetcher } from '../api';
import Layout from '../components/layout/Layout';
import Table from '../components/table/Table';
import Preloader from './../components/preloader/Preloader'
  

export default function Starship() {
  const tableHeader = [
    'checkbox',
    'Name',
    'Model',
    'Class',
    'Passenger',
    'Length',
    'Character'
  ];

  const { data, error } = useSWR('/starships', fetcher)

  if (error) return <div>Failed to load data</div>
  if (!data) return <Preloader />
  
  return (
    <Layout>
      <Table 
        title='Starships' 
        tableHeader={tableHeader} 
        films={data.results}
        headers={['name', 'model', 'starship_class', 'passengers', 'length', 'url']}
      />
    </Layout>
  )
}
