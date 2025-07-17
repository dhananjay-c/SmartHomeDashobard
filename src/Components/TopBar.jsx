import React from 'react'
import RoundBtn from './RoundBtn'
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { FaRegBell } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";


const TopBar = () => {
    const theme = useSelector((state) => state.theme);


    return (
        <>
            <div className='flex items-center justify-between' style={{ color: theme.textColor }}>
                <div className='w-10 flex'>
                    <RoundBtn icon={<IoSearch />}></RoundBtn>
                    <input type="text" placeholder='Start Searching Here' className="focus:outline-none focus:ring-0 focus:border-none bg-transparent border-none placeholder:text-sm ml-5"
                        style={{ '::placeholder': theme.textColor }} />
                </div>
                <div className='flex'>
                    <RoundBtn icon={<FaRegBell />}></RoundBtn>
                    <div className='ml-5'><RoundBtn icon={<LuUserRound />}></RoundBtn></div>
                </div>
            </div>
        </>
    )
}

export default TopBar