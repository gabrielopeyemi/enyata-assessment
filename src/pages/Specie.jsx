import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api';
import Layout from '../components/layout/Layout';
import {  useParams } from "react-router";
import Preloader from '../components/preloader/Preloader';
import Image from '../components/image/Image';
import Wookie from './../assets/PNG/wookie.png';


export default function Specie() {
    let { id } = useParams()
    const { data, error } = useSWR(`/species/${id}`, fetcher);
    
    if (error) return <div>Failed to load data</div>
    if (!data) return <Preloader />
    
    const { name, designation, language, average_lifespan } = data;
    return (
        <React.Fragment>
            <Layout showBackButton>
                <div className='flex flex-col md:flex-row'>
                    <Image src={Wookie} alt={Wookie} className={'w-[318px] h-[450px]'} />

                    <div className='md:m-[28px] text-md font-medium'>
                        <h2 className='font-bold text-[48px] uppercase'>{name}</h2>
                        <h4>Designation: {designation}</h4>
                        <h4>Language: {language}</h4>
                        <h4>Average Lifespan: {average_lifespan}</h4>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}
