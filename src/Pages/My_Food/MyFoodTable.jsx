import { RxPencil1, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyFoodTable = ({ cars, mycars, setMycars }) => {
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
                fetch(`http://localhost:4000/foodItem/${id}`, {
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
                        <img src={cars?.picture} className="w-40 rounded-md mr-4" alt="" />
                        <div className="text-left font-bold">{cars?.name}</div>

                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{cars?.userName}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{cars?.category}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">${cars?.price}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{cars?.rating}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left text-sm text-green-500">{cars?.availableQuantity}
                    </div>
                </td>
                <td className="md:pl-12 py-4 whitespace-nowrap flex gap-4">

                    <RxCross1 onClick={() => deleteCar(cars?._id)} className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxCross1>
                    {/* The button to open modal */}
                    <Link to={`/update/${cars?._id}`} htmlFor="my-modal"><RxPencil1 className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxPencil1></Link>
                    <Link to={`/managefood/${_id}`}><button className="bg-orange-700 py-2 px-2 rounded-lg text-white">Manage Food</button></Link>

                    
                </td>
            </tr>
            
        </>
    );
};

export default MyFoodTable;





    