import { useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const details =useLoaderData();
    const{name, quantity, location, expiration_date, food_image, donator_name,}=details;
    return (
        <div>
            <ol>
                <li>Donator Name:{donator_name} </li>
                <li>PickUp Location:{location}</li>
            </ol>
            
        </div>
    );
};

export default CardDetails;