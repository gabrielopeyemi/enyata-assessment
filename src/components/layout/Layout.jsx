import { navbar } from '../../constant/navbar-data';
import React from 'react';
import Logo from '../logo/Logo';
import Overview from '../../assets/SVG/overview.svg'
import People from '../../assets/SVG/people.svg'
import Species from '../../assets/SVG/species.svg'
import Starships from '../../assets/SVG/starships.svg'
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';

export default function Layout({children}) {
    const icons = [Overview, People, Species, Starships];
    const location = useLocation();
    const currentPath = location.pathname;


    return (
        <div className='bg-white flex relative'>
            <div className='w-[60px] md:w-[272px] bg-oxfordBlue h-screen'>
                <div className='w-full flex justify-center py-8'>
                    <Logo className='w-[40px] md:w-[107px] md:h-[46px]' />
                </div>
                <ul className='py-8 flex flex-col items-start md:mx-2'>
                    {navbar.map((eachNav) => (
                        <li key={eachNav.id} className={`w-full my-1 ${eachNav.id === '0' && 'pb-[70px]'}`}>
                            <a className={`flex md:justify-start justify-center items-center gap-1 md:px-2 py-[12px] rounded-sm hover:bg-celticBlue/40 w-full ${currentPath === eachNav.link && 'bg-celticBlue'}`} href={eachNav.link}>
                                <img 
                                    src={icons[Number(eachNav.id)]} 
                                    alt={''} 
                                    width={100} 
                                    height={100} 
                                    className='w-[17px] h-[17px] ' 
                                />
                                <h4 className='text-md hidden md:block text-white'>{eachNav.name}</h4>
                                <h4 className='text-md md:hidden uppercase text-white'>{eachNav.name.charAt(0)}</h4>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <main className='md:w-[calc(100%_-_272px)] w-[calc(100%_-_60px)] text-black relative overflow-y-scroll h-screen'>
                <Header />
                <div className='mx-1 xl:mx-[26px] py-[75px]'>
                    {children}
                </div>
            </main>
        </div>
    )
}

