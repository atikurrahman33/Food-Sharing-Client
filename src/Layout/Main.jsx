import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
             <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>            
        </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;