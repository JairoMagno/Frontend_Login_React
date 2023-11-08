import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/sidebar";
import DashBoard from "../dashboard/dashboard";

function Layout () {

    return (
        <>
        <SideBar />
        <div className="main-div">
            <Outlet />
        </div>
        </>
    );
}

export default Layout