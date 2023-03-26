import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../api';
import Layout from '../components/layout/Layout';
import Table from '../components/table/Table';
import Preloader from '../components/preloader/Preloader'

export default function Species() {
  const tableHeader = [
    'checkbox',
    'Name',
    'Eye Colors',
    'Hair Color',
    'Hair Color',
    'Height',
    'Created'
  ];

  const { data, error } = useSWR('/species', fetcher)

  if (error) return <div>Failed to load data</div>
  if (!data) return <Preloader />

  return (
    <Layout>
      <Table 
        title='Species' 
        tableHeader={tableHeader} 
        films={data.results}
        headers={['name', 'classification', 'eye_colors', 'hair_colors', 'average_height', 'created']}
      />
    </Layout>
  )
}
