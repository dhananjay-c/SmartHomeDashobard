import { useSelector } from 'react-redux';
import NavBtn from './navBtn';
import RoomBtn from './RoomBtn';


const TopBar2 = () => {
    const theme = useSelector((state) => state.theme);


    return (
        <>
            <div className='flex items-center justify-between' style={{ color: theme.textColor }}>
                <div className='flex'>
                    <h1 className='flex text-2xl font-medium'>Hello, {"Marianna"}!</h1>
                </div>
                <div className='flex'>
                    <RoomBtn title={"Living Room"}></RoomBtn>
                    <span className='ml-3'><RoomBtn title={"Bed Room"}></RoomBtn></span>
                    <span className='ml-3'><RoomBtn title={"Kitchen"}></RoomBtn></span>
                    <span className='ml-3'><RoomBtn title={"Hallway"}></RoomBtn></span>
                </div>
            </div>
        </>
    )
}

export default TopBar2






// TopNav2