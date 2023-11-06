import { Link } from "react-router-dom";


const  AllFoodCard= ({ food }) => {
    const { _id, title, img, price } = food;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p className="text-orange-600 font-semibold">Price: ${price}</p>

            </div>
        </div>
    );
};

export default AllFoodCard;