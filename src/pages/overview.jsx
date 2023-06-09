import useSWR from 'swr'
import { fetcher } from '../api';
import React from 'react';
import Table from '../components/table/Table';
import Layout from '../components/layout/Layout';
import OverviewCard from '../components/overview-card/OverviewCard';
import Preloader from '../components/preloader/Preloader'

const Overview = () => {
  const tableHeader = [
    'checkbox',
    'Film Title',
    'Release Date',
    'Director',
    'Producer',
    'Episode ID',
    'Character'
  ];
  const calls = [
    '/films', 
    '/starships',
    '/people',
    '/species'
  ]
  const { data, error } = useSWR(calls, (endpoints) => Promise.all(endpoints.map(fetcher)))

  if (error) return <div>Failed to load data</div>
  if (!data) return <Preloader />


  return (
    <React.Fragment>
      <Layout>
          <div className='grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-1 mb-[75px]'>
            {data.map((eachData, i) => <OverviewCard data={eachData} title={calls[i]} />)}
          </div>
          <Table 
            title='Films' 
            tableHeader={tableHeader} 
            films={data[0].results}
            headers={['title', 'release_date', 'director', 'producer', 'episode_id', '']}
          />
      </Layout>
    </React.Fragment>
  )
}

export default Overview;