import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import themeAction from '../Actions/themeAction';
import { MdDarkMode } from 'react-icons/md';
import { FiMoon } from "react-icons/fi";


const ToggleThemeBtn = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(themeAction());  // dispatch your thunk action here
        console.log(theme);

    };

    return (
        <span
            className="cursor-pointer"
            onClick={handleToggleTheme}
            style={{
                color: theme.textColor,
            }}
        >
            <FiMoon />
        </span>
    );
};

export default ToggleThemeBtn;
