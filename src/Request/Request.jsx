import Swal from 'sweetalert2';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

function Request() {
    const data = useLoaderData();
    const { _id, name, location, expiration_date, food_image, donator_name,email } = data;

    const { user } = useContext(AuthContext);
    console.log(data)

    const handleUser = e => {
        e.preventDefault();

        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const dname = form.dname.value;
        const demail = form.demail.value;
        const userName = user.displayName;
        const userEmail = form.userEmail.value;
        const userphoto = form.userphoto.value;
        const location = form.location.value;
        const date = form.date.value;
        const status = form.status.value;
        const time = form.time.value;
        const donation = form.donation.value;
        const note = form.note.value;

        // Create a Date object to get the current date and time
        const currentDate = new Date();

        // Format the date as "YYYY-MM-DDTHH:mm" to match the input type="time" format
        const formattedDate = currentDate.toISOString().slice(0, 16);

        // Update the "Request Date" input with the current date
        form.time.value = formattedDate;

        const userObj = {
            name: name,
            food_image: photoURL,
            userName,
            email: userEmail,
            time: formattedDate,
            donation: donation,
            location: location,
            expiration_date: date,
            userphoto,
            status,
            note: note,
            donator_name: dname,
            donator_email: demail,
        };

        console.log(userObj);

        fetch('https://food-sharing-server-one.vercel.app/reqFoodItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                if (json.insertedId) {
                    Swal.fire(
                        'Thank you!',
                        'Your food Request complete',
                        'success'
                    );
                    form.reset();
                }
            });
    }

    return (
        <div>
             <Helmet>
        <title>Good Pear | Food Request</title>
      </Helmet>
            <h1 className="font-bold text-orange-700 md:text-4xl text-center">Request YOUR FOOD ITEM</h1>
            <div className="flex-shrink-0 mx-auto bg-[#F3F3F3] md:p-10 my-10">
                <div className="card-body">
                    <form onSubmit={handleUser}>
                        <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                            <div className="form-control">
                                <label className="block text-gray-700">Food Image</label>
                                <input type="text" name="photoURL" readOnly defaultValue={food_image} placeholder="Photo URL link..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Food Name</label>
                                <input type="text" name="name" readOnly defaultValue={name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Food ID</label>
                                <input type="text" name="userName" readOnly defaultValue={_id} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">User Email</label>
                                <input type="email" name="userEmail" readOnly defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">User Photo URL</label>
                                <input type="email" name="userphoto" readOnly defaultValue={user?.photoURL} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Donator Name</label>
                                <input type="text" name="dname" readOnly defaultValue={donator_name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Donator Email Address</label>
                                <input type="text" name="demail" readOnly defaultValue={email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Pickup Location</label>
                                <input type="text" name="location" readOnly defaultValue={location} placeholder="Pickup Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Expiration Date</label>
                                <input type="date" name="date" readOnly defaultValue={expiration_date} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Food Status</label>
                                <input type="text" name="status" readOnly defaultValue={"Available"} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Request Date</label>
                                <input type="time" name="time" readOnly className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Additional Note</label>
                                <input type="text" name="note" placeholder='Add something' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="block text-gray-700">Donation</label>
                                <input type="number" name="donation" placeholder="Donation Money" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn border-0 bg-orange-600 hover-bg-blue-700" type="submit" value="Request Food" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Request;
