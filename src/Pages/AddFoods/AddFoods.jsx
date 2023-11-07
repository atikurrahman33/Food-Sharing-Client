import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


function AddFoods() {
    
    const { user } = useContext(AuthContext);

    const handleUser = e => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const location = form.location.value;
        const date = form.date.value;
        const status = form.status.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const userObj = { // Use a different variable name
            name:name,
            food_image: photoURL,
            donator_name:userName,
            donator_email: userEmail,
            quantity: quantity,
            location:location,
            expiration_date:date,
            status,
            note:description
        };

        console.log(userObj);

        fetch('http://localhost:4000/foodItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj), // Send the userObj instead of user
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.insertedId) {
                Swal.fire(
                    'Thank you!',
                    'Your food is now available',
                    'success'
                )
                form.reset()
            }
        });
    }

  return (
    <div>
     <h1 className="font-bold text-orange-700 md:text-4xl text-center">ADD YOUR FOOD ITEM</h1>
            <div className=" flex-shrink-0 mx-auto bg-[#F3F3F3] md:p-10 my-10">
            
                <div className="card-body ">
                    <form onSubmit={handleUser}>
                        <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                            <div className="form-control">
                                <input type="text" name="photoURL" placeholder="Photo url link..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Food Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="userName" readOnly defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="userEmail" readOnly defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control">
                            <input type="text" name="location" placeholder="PickUp Location" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                            <input type="date" name="date"  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="status" readOnly defaultValue={"Available"} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="number" name="quantity" placeholder="Available quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-52 mt-4" name="description" placeholder="Detail description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                            <input className="btn border-0 bg-orange-600 hover:bg-blue-700" type="submit" value="ADD Food" />
                        </div>
                    </form>
                </div>
            </div>
      
     
    </div>
  )
}

export default AddFoods;
