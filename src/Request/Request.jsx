import { useLoaderData } from "react-router-dom";


const Request = () => {
    const data= useLoaderData();
    return (
        <div>
            {data.name}
        </div>
    );
};

export default Request;