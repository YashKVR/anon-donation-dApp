"use client"

import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {

    return (
        <div className='flex items-center justify-between bg-[#202225] text-[#f5f5f5] h-[9vh] px-2 fixed w-[100dvw]'>
            <p className=' cursor-pointer text-xl font-bold'>Anon Donations</p>
            <ConnectButton />
        </div>
    )
}

export default Navbar