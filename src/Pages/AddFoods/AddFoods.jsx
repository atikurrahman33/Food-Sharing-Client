import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';


function AddFoods() {
    
    const { user } = useContext(AuthContext);

    const handleUser = e => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        const form = e.target;
        const photoURL = form.photoURL.value;
        const userPhoto = form.userPhoto.value;
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
            email: userEmail,
            quantity: quantity,
            location:location,
            donator_image:userPhoto,
            expiration_date:date,
            status,
            note:description
        };

        console.log(userObj);

        fetch('https://food-sharing-server-one.vercel.app/foodItem', {
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
         <Helmet>
        <title>Good Pear | Add Food</title>
      </Helmet>
     <h1 className="font-bold text-orange-700 md:text-4xl text-center">ADD YOUR FOOD ITEM</h1>
            <div className=" flex-shrink-0 mx-auto bg-[#F3F3F3] md:p-10 my-10">
            
                <div className="card-body ">
                    <form onSubmit={handleUser}>
                        <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                            <div className="form-control">
                            <label className="mb-2 font-bold">Food Image</label>
                                <input type="text" name="photoURL" placeholder="Photo url link..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold">Food Name</label>
                                <input type="text" name="name" placeholder="Food Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold"> Name</label>
                                <input type="text" name="userName" readOnly defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold"> Email</label>
                                <input type="email" name="userEmail" readOnly defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold"> Photo URL</label>
                                <input type="text" name="userPhoto" readOnly defaultValue={user?.photoURL} className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control">
                            <label className="mb-2 font-bold">Pickup Location</label>
                            <input type="text" name="location" placeholder="PickUp Location" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold">Expiration Date</label>
                            <input type="date" name="date"  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold">Food Status</label>
                                <input type="text" name="status"  defaultValue={'Available'} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold">Quantity</label>
                                <input type="number" name="quantity" placeholder="Available quantity" className="input input-bordered " required />
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
