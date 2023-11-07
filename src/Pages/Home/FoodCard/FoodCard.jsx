import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {
    const { _id, name, quantity, location, expiration_date, food_image, donator_name, donator_image, note } = food;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 h-[200px]">
                    <img src={food_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="px-8 pb-2">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                </div>
                <div className="flex justify-between px-8">
                    <h2 className="font-bold text-lg">D.Name:{donator_name} </h2>
                    <img className="rounded-full h-10 " src={donator_image} alt="" />
                </div>
                <div>
                    <h3 className="font-bold">Food Quantity:{quantity} </h3>
                    <h4 className="font-bold">Expiration-Date:{expiration_date} </h4>
                </div>
                <div className="text-red-600">PickUp Location:{location} </div>
                <div className="font-semibold">{note}</div>
                <Link to={`/details/${_id}`}><button className="bg-orange-600 text-white py-2 px-3 rounded-lg my-2 w-full" >Details</button></Link>

            </div>

        </div>
    );
};

export default FoodCard;