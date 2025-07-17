
import { toggleTheme } from "../Reducers/themeSlice";


const themeAction = () => async (dispatch) => {


    await dispatch(toggleTheme())
    console.log("Action Success");


}

export default themeAction