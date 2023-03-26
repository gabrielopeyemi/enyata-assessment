import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api';
import Layout from '../components/layout/Layout';
import {  useParams } from "react-router";
import Preloader from '../components/preloader/Preloader';
import Image from '../components/image/Image';
import CoverImage from './../assets/PNG/cover.png';


export default function Film() {
    let { id } = useParams()
    const { data, error } = useSWR(`/films/${id}`, fetcher);
    
    if (error) return <div>Failed to load data</div>
    if (!data) return <Preloader />
    
    const { title, director, producer, release_date } = data;
    return (
        <React.Fragment>
            <Layout showBackButton>
                <div className='flex flex-col md:flex-row'>
                    <Image src={CoverImage} alt={CoverImage} className={'w-[318px] h-[450px]'} />

                    <div className='md:m-[28px] text-md font-medium'>
                        <h2 className='font-bold text-[48px] uppercase'>{title ? title : ''}</h2>
                        <h4>Director: {director}</h4>
                        <h4>Producer: {producer}</h4>
                        <h4>Release Date: {release_date}</h4>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}
