import React from 'react'
import DataCards from '../Components/DataCards'
import { CiTempHigh } from "react-icons/ci";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { IoIosWifi } from "react-icons/io";
import { BsWind } from "react-icons/bs";
import ElectricityChart from '../Components/ElectricityChart';
import ActionCard from '../Components/ActionCard';
import { IoPartlySunnyOutline } from "react-icons/io5";
import { CiCloudMoon } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import ConditionerCart from '../Components/ConditionerCart';
import GasWaterBarChart from '../Components/GasWaterBarChart';

const Room = () => {
    return (
        <>
            <div className='w-[100%] flex justify-between'>

                <div className='w-[70%]'>

                    <div className='flex justify-between w-[100%]'>
                        <DataCards title={"Temperature"} color={"rgb(216, 225, 232)"} value={"23°C"} icon={<CiTempHigh size={30} />}></DataCards>
                        <DataCards title={"Humidity"} color={"rgb(210, 223, 204)"} value={"35%"} icon={<MdOutlineWaterDrop size={30} />}></DataCards>
                        <DataCards title={"Light"} color={"rgb(222, 226, 159)"} value={"86%"} icon={<IoBulbOutline size={30} />}></DataCards>
                        <DataCards title={"Air Quality Index"} color={"rgb(250, 225, 167)"} value={"49"} icon={<BsWind size={30} />}></DataCards>
                        <DataCards title={"Wi-Fi"} color={"rgb(187, 216, 236)"} value={"788 hl"} icon={<IoIosWifi size={30} />}></DataCards>
                    </div>

                    <div className='mt-10'><ElectricityChart></ElectricityChart></div>


                    <div className='flex justify-between w-[100%] mt-10'>
                        <ActionCard title={"Good Morning"} color={"rgb(216, 225, 232)"} value={"23°C"} icon={<IoPartlySunnyOutline size={30} />}></ActionCard>
                        <ActionCard title={"Good Night"} color={"rgb(210, 223, 204)"} value={"35%"} icon={<CiCloudMoon size={30} />}></ActionCard>
                        <ActionCard title={"Leave Home"} color={"rgb(222, 226, 159)"} value={"86%"} icon={<IoLogOutOutline size={30} />}></ActionCard>
                        <ActionCard title={"Back Home"} color={"rgb(250, 225, 167)"} value={"49"} icon={<IoLogInOutline size={30} />}></ActionCard>
                    </div>
                </div>

                <div className='w-[25%] flex flex-col justify-between'>
                    <div className="w-[100%] h-[48%]">
                        <ConditionerCart></ConditionerCart>
                    </div>
                    <div className="w-[100%] h-[48%] ">
                        <GasWaterBarChart></GasWaterBarChart>
                    </div>
                </div>











            </div>
        </>
    )
}

export default Room