import { Link, useLoaderData } from "react-router-dom";

const ManageFood = () => {
    const reqFood = useLoaderData();
    console.log(reqFood);
    // const [reqFood, setReqFood] = useState([])
    // fetch(`http://localhost:4000/reqFoodItem/${params.id}`)
    // .then(res => res.json())
    // .then(data => setReqFood(data))
    return (
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            reqFood.map(food => <div key={food._id}>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  
  <div className="card-body font-bold">
    <h2 className="card-title">R.Name: {food.userName}</h2>
    <img className="rounded-full h-28 w-28 " src={food.userphoto} alt="" />
    <p>R. Email: {food.email}</p>
    <h1>Request Date: {food.time}</h1>
    <div className="card-action pl-24">
        <Link to={`/manageup/${food?._id}`}><button className="py-2 px-3 bg-orange-600 text-white rounded-lg ">Deliver</button></Link>
      
    </div>
  </div>
</div>
            </div>)
          }
        </div>
    );
};

export default ManageFood;