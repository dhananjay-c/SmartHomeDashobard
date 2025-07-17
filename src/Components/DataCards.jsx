import React from 'react'
import { useSelector } from 'react-redux'

const DataCards = ({ color, icon, title }) => {

    const theme = useSelector((state) => state.theme);

    return (
        <>
            <div className='w-20 h-20' style={{ background: color }}>
                <div>
                    <div>{icon}</div> <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}

export default DataCards