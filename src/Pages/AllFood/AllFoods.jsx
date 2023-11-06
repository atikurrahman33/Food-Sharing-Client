import { useEffect, useState } from "react";
import AllFoodCard from "./AllFoodCard";


const AllFoods = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/foodItem")
      .then((response) => response.json())
      .then((data) => {
     setFood(data)
      });
  }, []);

  return (
    <div className="pb-8">
      <div className="text-center m-5">
        <h1 className="text-5xl font-bold m-3">Our Food</h1>
       
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-9 mx-auto w-9/12 py-16">
        {food.map((foodItem) => (
            <AllFoodCard key={foodItem._id} food={foodItem}></AllFoodCard>
         
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
