import { useLoaderData } from "react-router-dom";


const ManageFood = () => {
    const requset = useLoaderData();
    return (
        <div>
            {requset.email}
        </div>
    );
};

export default ManageFood;