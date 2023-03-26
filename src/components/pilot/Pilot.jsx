import React from 'react'
import useSWR from 'swr';
import { fetcher } from '../../api';

export default function Pilot({pilot}) {
    const { data } = useSWR(`/people/${pilot.split("/")[5]}`, fetcher);
    console.log({ pilot: data })
    return (
        <span className='mx-1'>{data?.name},</span>
    )
}
