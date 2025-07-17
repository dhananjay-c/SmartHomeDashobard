import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux'


const ActionCard = ({ icon, title }) => {

    const theme = useSelector((state) => state.theme);

    const [hovered, setHovered] = useState(false); // ← add this

    return (
        <>
            <div className='w-55 h-35 px-3 py-7 rounded-4xl text-[rgb(31,31,31)]'
                style={{
                    backgroundColor: hovered ? "rgb(217, 224, 232)" : 'transparent',
                    color: hovered ? theme.textColorInvert : theme.textColor,
                    transition: 'background-color 0.4s ease, color 0.4s ease',
                    boxShadow: `0 0 12px ${theme.shadow}`
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>


                <div className='flex justify-center'>
                    <div>{icon}</div>
                </div>
                <div className='flex justify-center mt-6'>
                    <h1 className='text-md font-medium ml-2'>{title}</h1>
                </div>
            </div>
        </>
    )
}

export default ActionCard