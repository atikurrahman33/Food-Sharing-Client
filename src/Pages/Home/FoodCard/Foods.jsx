import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const Foods = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/foodItem")
      .then((response) => response.json())
      .then((data) => {
        // Sort the data by quantity in descending order
        data.sort((a, b) => b.quantity - a.quantity);
        // Get the top 6 items
        const top6Food = data.slice(0, 6);
        setFood(top6Food);
      });
  }, []);

  return (
    <div className="pb-8 text-center">
      <div className="text-center m-5">
        <h1 className="text-5xl font-bold m-3 text-orange-700">Our Food</h1>
        <p>
        He innovation foodsharing means the coordinated collecting of food products that would <br />otherwise be discarded  and redistributing them to the people who will consume it.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-12 mx-auto w-9/12 py-16">
        {food.map((foodItem) => (
          <FoodCard key={foodItem._id} food={foodItem} />
        ))}
      </div>
     <Link to={'/allfood'}> <button className="bg-orange-600 text-white py-2 px-3 rounded-lg ">See More</button></Link>
    </div>
  );
};

export default Foods;
