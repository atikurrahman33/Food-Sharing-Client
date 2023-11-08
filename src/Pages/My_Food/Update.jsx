import { useLoaderData, useNavigate,  } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    
    const foods = useLoaderData();
    console.log(foods);

    const navigate = useNavigate();
    const updateCarData = (e) =>{
        e.preventDefault();
        const form = e.target;
        const food_image = form.photoURL.value;
        const name = form.name.value;
        const status = form.status.value;
        const quantity = form.quantity.value;
        const location = form.pickupLocation.value;
        const updateCar = {
            food_image,
            name,
            status,
            quantity,
            location
        }
        
        console.log(updateCar);

        fetch( `http://localhost:4000/foodItem/${foods._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Car updated successfully',
                        'success'
                    )
                    form.reset();
                    navigate('/myfood');

                }
            })
    }
    return (
        <div>

            <div className="card-body ">
                <form onSubmit={updateCarData}>
                    <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                        <div className="form-control ">
                            <label className="mb-2 font-bold">Photo URL</label>
                            <input type="text" name="photoURL" defaultValue={foods.food_image} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="mb-2 font-bold">Name</label>
                            <input type="text" name="name" defaultValue={foods.name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="mb-2 font-bold">Status</label>
                            <input type="text" name="status" defaultValue={foods.status} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="mb-2 font-bold">Quantity</label>
                            <input type="text" name="quantity" defaultValue={foods.quantity} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="mb-2 font-bold">pickup Location</label>
                        <input type="text" className="input input-bordered"  name="pickupLocation" defaultValue={foods.location} id="" />
                    </div>
                    <div className="form-control mt-6">
                        {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                        <input className="btn border-0 bg-blue-500 hover:bg-blue-700" type="submit" value="Update Food" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;