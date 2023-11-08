import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams,  } from "react-router-dom";
import Swal from "sweetalert2";

const ManageUp = () => {
    
    const data = useLoaderData();
    console.log(data);
    const navigate = useNavigate();
    const updateFoodData = (e) =>{
        e.preventDefault();
        const form = e.target;
        
        const status = form.status.value;
        
        const updateFood = {
            
            status
            
        }
        
        console.log(updateFood);

        fetch( `http://localhost:4000/reqFood/status/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Food updated successfully',
                        'success'
                    )
                    form.reset();
                    navigate('/myfood');

                }
            })
    }
    return (
        <div className="py-12">
             <Helmet>
                <title>Good Pear | Food Update</title>
            </Helmet>
            <h2 className="text-center text-3xl text-orange-600 font-bold">Update Status</h2>

            <div className="card-body ">
                <form onSubmit={updateFoodData}>
                    <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                        
                        
                        <div className="form-control">
                            <label className="mb-2 font-bold">Status</label>
                            <input type="text" name="status"  className="input input-bordered" required />
                        </div>
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

export default ManageUp;