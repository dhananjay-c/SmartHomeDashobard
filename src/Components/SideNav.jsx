import React from 'react'
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from "react-icons/io";
import NavBtn from './navBtn';
import RoundBtn from './RoundBtn';
import { TbLayoutDashboard } from "react-icons/tb";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsDoorOpen } from "react-icons/bs";
import { FiShield } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import ToggleThemeBtn from './ToggleThemeBtn';



const SideNav = () => {
  const theme = useSelector((state) => state.theme);


  return (
    <>
      <div className='w-[100%] h-screen' style={{ color: theme.textColor, backgroundColor: theme.sidebar }} >

        <div className='flex justify-around pt-9'>
          <div className='flex items-center'>
            <h1 className='mr-4 text-xl font-bold'>CleverHome</h1>
            <div>
              <RoundBtn icon={<IoIosArrowBack />} ></RoundBtn>
            </div>
          </div>
        </div>


        <div className='ml-7 pt-15'>
          <span className=''>
            <NavBtn title={"Dashboard"} icon={<TbLayoutDashboard />}></NavBtn>
          </span>
          <span className='flex mt-4'>
            <NavBtn title={"Devices"} icon={<HiOutlineComputerDesktop />}></NavBtn>
          </span>
          <span className='flex mt-4'>
            <NavBtn title={"Rooms"} icon={<BsDoorOpen />}></NavBtn>
          </span>
          <span className='flex mt-4'>
            <NavBtn title={"Security"} icon={<FiShield />}></NavBtn>
          </span>
          <span className='flex mt-4'>
            <NavBtn title={"Services"} icon={<RiServiceLine />}></NavBtn>
          </span>
          <span className='flex mt-4'>
            <NavBtn title={"Members"} icon={<BsPeople />}></NavBtn>
          </span>
        </div>


        <div className='ml-7 pt-95'>
          <span className=''>
            <NavBtn title={"Settings"} icon={<IoSettingsOutline />}></NavBtn>
          </span>
          <span className='flex mt-4'>
            <NavBtn title={"Logout"} icon={<HiOutlineLogout />}></NavBtn>
          </span>
        </div>

        <div className='mt-10 flex justify-around'>
          <ToggleThemeBtn></ToggleThemeBtn>
        </div>













      </div>
    </>
  )
}

export default SideNav