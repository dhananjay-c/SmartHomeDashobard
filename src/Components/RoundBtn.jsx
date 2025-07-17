import { useState } from 'react';
import { useSelector } from 'react-redux';

const RoundBtn = ({ icon }) => {
    const theme = useSelector((state) => state.theme);
    const [hovered, setHovered] = useState(false); // ← add this
    return (
        <div
            className="flex items-center p-2 rounded-full cursor-pointer w-8 h-8"
            style={{
                backgroundColor: hovered ? theme.textColor : theme.sidebar,
                color: hovered ? theme.textColorInvert : theme.textColor,
                transition: 'background-color 0.4s ease, color 0.4s ease' // smooth transition added here
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div>{icon}</div>
        </div>
    );
}

export default RoundBtn;





