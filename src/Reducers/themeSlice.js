import { createSlice } from '@reduxjs/toolkit';

// Dark Theme
const darkTheme = {
    sidebar: "rgb(248, 248, 248)",
    mainPage: "rgb(255, 255, 255)",
    mainPageInvert: "rgb(18, 18, 20)",
    btnColor: "rgb(31, 31, 31)",
    charPrimary: "rgb(100, 105, 124)",
    charSecondary: "rgb(217, 221, 227)",
    textColor: "rgb(31, 31, 31)",
    textColorInvert: "rgb(255, 255, 255)",
    shadow: "rgb(200,200,200)",
    isDark: false
};


// Light Theme
const lightTheme = {
    sidebar: "rgb(28, 28, 30)",
    mainPage: "rgb(18, 18, 20)",
    mainPageInvert: "rgb(255, 255, 255)",
    btnColor: "rgb(240, 240, 240)",
    charPrimary: "rgb(200, 205, 220)",
    charSecondary: "rgb(115, 120, 135)",
    textColor: "rgb(255, 255, 255)",
    textColorInvert: "rgb(31,31,31)",
    shadow: "rgb(10,10,10)",
    isDark: true
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: darkTheme,
    reducers: {
        toggleTheme: (state) => {
            console.log(state, "<====");
            return state.isDark ? darkTheme : lightTheme;
        }
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
