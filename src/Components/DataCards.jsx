import React from 'react'
// import { useSelector } from 'react-redux'

const DataCards = ({ color, icon, title, value }) => {

    // const theme = useSelector((state) => state.theme);

    return (
        <>
            <div className='w-42 h-35 px-3 py-7 rounded-4xl text-[rgb(31,31,31)]' style={{ background: color }}>
                <div className='flex items-center'>
                    <div>{icon}</div> <h1 className='text-sm font-medium ml-2'>{title}</h1>
                </div>
                <div>
                    <h1 className='text-4xl mt-2 ml-1'>{value}</h1>
                </div>
            </div>
        </>
    )
}

export default DataCards