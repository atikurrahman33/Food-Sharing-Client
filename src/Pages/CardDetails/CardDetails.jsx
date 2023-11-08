import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const details = useLoaderData();
    const {_id, name, quantity, location, expiration_date, food_image, donator_name, } = details;
    return (
        <div className="py-12">
             <Helmet>
        <title>Good Pear | Details</title>
      </Helmet>
            <ol className="text-2xl font-bold pl-14 mt-4 text-orange-700">
                <li>1.Donator Name:{donator_name} </li>
                <li>2.PickUp Location:{location}</li>
            </ol>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto pt-6">
                <figure className="px-10 pt-10">
                    <img src={food_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className="font-bold">Food Quantity: {quantity}</p>
                    <p className="font-bold">Expiration Date: {expiration_date}</p>
                    <div className="card-actions pl-24">
                        <Link to={`/request/${_id}`}><button className="bg-orange-600 rounded-lg py-2 px-3 text-white">Request</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;