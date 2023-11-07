import { RxPencil1, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyFoodRequestTable = ({ cars, mycars, setMycars }) => {
    const{_id}=cars;
    console.log(cars);
    const deleteCar= (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch( `http://localhost:4000/reqFoodItem/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                            )
                            const remaining = mycars.filter(c => c._id !== id);
                            setMycars(remaining);
                        }
                    })
            }
        })
    }
    return (
        <>
             <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="md:flex items-center">
                        <img src={cars?.food_image} className="w-40 rounded-md mr-4" alt="" />
                        <div className="text-left font-bold">{cars?.donator_name}</div>

                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{cars?.status}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{cars?.expiration_date}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">${cars?.donation}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{cars?.time}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left text-sm text-green-500">{cars?.location}
                    </div>
                </td>
                <td className="md:pl-12 py-4 whitespace-nowrap flex items-center gap-4">

                   {
                     cars?.status == 'Delivered' ? <p>No Cancel</p> :
                   <button onClick={() => deleteCar(cars?._id)} className="bg-orange-700 py-2 px-2 rounded-lg text-white">Cancel Request</button>
}

                    
                </td>
            </tr>
            
        </>
    );
};

export default MyFoodRequestTable;





    