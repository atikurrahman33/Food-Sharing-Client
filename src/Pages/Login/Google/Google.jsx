import { Link } from "react-router-dom";



const Google = () => {
   
    
    return (
        <Link  className="flex gap-4 items-center bg-indigo-600 justify-center py-2 rounded-lg mt-2">
            <h1 className="text-[18px] text-white ">Sign in with google</h1>
            <img  className="w-10" src="https://i.ibb.co/bb5hHDZ/google.png" alt="google-icon" />
        </Link>
    );
};

export default Google;