import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api';
import Layout from '../components/layout/Layout';
import {  useParams } from "react-router";
import Preloader from '../components/preloader/Preloader';
import Image from '../components/image/Image';
import DeathStar from './../assets/PNG/death-star.png';
import Pilot from '../components/pilot/Pilot';


export default function Starship() {
    let { id } = useParams()
    const { data, error } = useSWR(`/starships/${id}`, fetcher);
    
    if (error) return <div>Failed to load data</div>
    if (!data) return <Preloader />
    
    console.log({ id, data })
    const { name, model, passengers, pilots } = data;
    return (
        <React.Fragment>
            <Layout showBackButton>
                <div className='flex flex-col md:flex-row'>
                    <Image src={DeathStar} alt={DeathStar} className={'w-[318px] h-[450px]'} />

                    <div className='md:m-[28px] text-md font-medium'>
                        <h2 className='font-bold text-[48px] uppercase'>{name ? name: ''}</h2>
                        <h4>Model: {model}</h4>
                        <h4>Passengers: {passengers}</h4>
                        <p>Pilots: {pilots.map((pilot) => <Pilot pilot={pilot} />)}</p>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}
