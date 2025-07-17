import { useState } from 'react';
import { useSelector } from 'react-redux';

const RoomBtn = ({ title = "", icon = '' }) => {
    const theme = useSelector((state) => state.theme);

    const [hovered, setHovered] = useState(false); // ← add this

    return (
        <div
            className="flex items-center px-3 py-1 rounded-full cursor-pointer w-auto"
            style={{
                backgroundColor: hovered ? theme.textColor : 'transparent',
                color: hovered ? theme.textColorInvert : theme.textColor,
                transition: 'background-color 0.4s ease, color 0.4s ease'
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div>{icon}</div>
            <h1 className="">{title}</h1>
        </div>

    );
}

export default RoomBtn;
