import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
             <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>            
        </div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;