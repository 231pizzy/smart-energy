
import { useState } from "react";
import DashBoardData from "../components/DashboardData";
import SideBar from "../components/SideBar";
import NewDashboard from "../components/NewDashboard";


const DashBoard = () => {
    const [sideBar, setSideBar] = useState(false)
    return (
        <div className="flex" >
            <SideBar sideBar={sideBar} setSideBar={setSideBar}/>
            {/* <DashBoardData sideBar={sideBar}/> */}
            <NewDashboard sideBar={sideBar}/>
            
      </div>

    );
};

export default DashBoard;
