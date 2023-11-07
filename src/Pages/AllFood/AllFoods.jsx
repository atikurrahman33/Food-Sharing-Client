import { useEffect, useState } from "react";
import AllFoodCard from "./AllFoodCard";

const AllFoods = () => {
  const [food, setFood] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/foodItem")
      .then((response) => response.json())
      .then((data) => {
        // Sort the data by expiration_date in ascending order
        data.sort((a, b) => new Date(a.expiration_date) - new Date(b.expiration_date));
        setFood(data);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="pb-8">
      <div className="text-center m-5">
        <h1 className="text-5xl font-bold m-3">Our Food</h1>
        <input
          type="text"
          placeholder="Search by food name"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border rounded "
        />
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-12 mx-auto w-9/12 py-16">
        {food
          .filter((foodItem) =>
            foodItem.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((foodItem) => (
            <AllFoodCard key={foodItem._id} food={foodItem}></AllFoodCard>
          ))}
      </div>
    </div>
  );
};

export default AllFoods;
