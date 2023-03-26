import React from 'react';
import { navbar } from '../../constant/navbar-data';
import { Link, useLocation } from 'react-router-dom';
import Overview from '../../assets/SVG/overview.svg'
import People from '../../assets/SVG/people.svg'
import Species from '../../assets/SVG/species.svg'
import Starships from '../../assets/SVG/starships.svg'

export default function SideBar() {
    const icons = [Overview, People, Species, Starships];
    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
        <React.Fragment>
            <ul className='py-8 flex flex-col items-start md:mx-2'>
                {navbar.map((eachNav) => {
                    console.log({ currentPath: currentPath.split("/")[1], "eachNav.link": eachNav.link.split("/")[1]})
                    return(
                        <li key={eachNav.id} className={`w-full my-1 ${eachNav.id === '0' && 'pb-[70px]'}`}>
                            <Link 
                                className={`flex md:justify-start justify-center items-center gap-1 md:px-2 py-[12px] rounded-sm hover:bg-celticBlue/40 w-full ${currentPath.split("/")[1] === eachNav.link.split("/")[1] && 'bg-celticBlue'}`} 
                                to={eachNav.link}
                            >
                                <img 
                                    src={icons[Number(eachNav.id)]} 
                                    alt={''} 
                                    width={100} 
                                    height={100} 
                                    className='w-[17px] h-[17px] ' 
                                />
                                <h4 className='text-md hidden md:block text-white'>{eachNav.name}</h4>
                                <h4 className='text-md md:hidden uppercase text-white'>{eachNav.name.charAt(0)}</h4>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}
