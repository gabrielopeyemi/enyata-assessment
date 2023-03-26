import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api';
import Layout from '../components/layout/Layout';
import {  useParams } from "react-router";
import Preloader from '../components/preloader/Preloader';
import Image from '../components/image/Image';
import ShankComics from './../assets/PNG/shank-comics.png';


export default function Person() {
    let { id } = useParams()
    const { data, error } = useSWR(`/people/${id}`, fetcher);
    
    if (error) return <div>Failed to load data</div>
    if (!data) return <Preloader />
    
    const { height, gender, birth_year, skin_color, name } = data;
    return (
        <React.Fragment>
            <Layout showBackButton>
                <div className='flex flex-col md:flex-row'>
                    <Image src={ShankComics} alt={ShankComics} className={'w-[318px] h-[450px]'} />

                    <div className='md:m-[28px] text-md font-medium'>
                        <h2 className='font-bold text-[48px] uppercase'>{name}</h2>
                        <h4 className='capitalize'>Gender: {gender}</h4>
                        <h4>Year of Birth: {birth_year}</h4>
                        <h4 className='capitalize'>Skin Color: {skin_color}</h4>
                        <h4>Height: {height} CM</h4>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}
