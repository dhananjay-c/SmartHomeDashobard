import { useSelector } from "react-redux";
import SideNav from "./Components/SideNav"
import TopBar from "./Components/TopBar"
import TopBar2 from "./Components/TopBar2";
import Room from "./Pages/Room";

function App() {

  const theme = useSelector((state) => state.theme);

  return (
    <>
      <div style={{ transition: 'background-color 0.4s ease, color 0.4s ease' }} className="flex">
        <div className="w-[11vw]"><SideNav></SideNav></div>
        <div className="w-[89vw] py-10 px-20" style={{ backgroundColor: theme.mainPage }}>
          <TopBar></TopBar>
          <div className="mt-7">
            <TopBar2></TopBar2>
            <Room></Room>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
