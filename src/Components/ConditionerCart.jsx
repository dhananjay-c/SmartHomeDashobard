import React from 'react';
import { useSelector } from 'react-redux';
import { GoSun } from "react-icons/go";
import { IoSnowOutline } from "react-icons/io5";
import { BsWind } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import RoundBtn from './RoundBtn'


import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";



const ConditionerCart = ({ temperature = 23, min = 16, max = 30 }) => {
    const theme = useSelector((state) => state.theme);

    // Calculate progress (circle stroke offset)
    const percentage = ((temperature - min) / (max - min)) * 100;
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div
            className="w-[100%] h-[100%] rounded-3xl flex flex-col items-center justify-between p-4"
            style={{
                backgroundColor: theme.mainPage,
                boxShadow: `0 0 10px ${theme.shadow}`,
                color: theme.textColor
            }}
        >
            <h1 className="text-lg mt-1 font-semibold">Conditioner</h1>

            <div className='flex items-center'>

                <RoundBtn icon={<TiMinus />}></RoundBtn>

                <div className="relative w-58 h-58 flex items-center justify-center">
                    {/* Circular Progress Background */}
                    <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke="#ddd"
                            strokeWidth="5"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={0}
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke="#a4cc63" // lime green
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            transform="rotate(-90 50 50)"
                        />
                    </svg>

                    {/* Temperature in center */}
                    <div className="text-xl font-semibold z-10">
                        {temperature}°C
                    </div>
                </div>

                <RoundBtn icon={<TiPlus />}></RoundBtn>

            </div>


            {/* Bottom Icons */}
            <div className="flex justify-between w-[60%] font-black">
                <RoundBtn icon={<GoSun />}></RoundBtn>
                <RoundBtn icon={<IoSnowOutline />}></RoundBtn>
                <RoundBtn icon={<IoWaterOutline />}></RoundBtn>
                <RoundBtn icon={<GoSun />}></RoundBtn>

            </div>
        </div>
    );
};

export default ConditionerCart;
