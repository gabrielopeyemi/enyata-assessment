import React from 'react';
import Logo from '../logo/Logo';
import Header from '../header/Header';
import SideBar from './../side-bar/SideBar'

export default function Layout({children, showBackButton}) {
    


    return (
        <div className='bg-white flex relative'>
            <div className='w-[60px] md:w-[272px] bg-oxfordBlue h-screen'>
                <div className='w-full flex justify-center py-8'>
                    <Logo data-testid="logo" className='w-[40px] md:w-[107px] md:h-[46px]' />
                </div>
                <SideBar />
            </div>
            <main className='md:w-[calc(100%_-_272px)] w-[calc(100%_-_60px)] bg-antiFlashWhite text-black relative overflow-y-scroll h-screen'>
                <Header showBackButton={showBackButton} />
                <div className='mx-1 xl:mx-[26px] py-[46px]'>
                    {children}
                </div>
            </main>
        </div>
    )
}

