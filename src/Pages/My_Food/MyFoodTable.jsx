import { RxPencil1, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyFoodTable = ({ foods, myfoods, setMyfoods }) => {
    const{_id}=foods;
    console.log(foods);
    const deleteFood= (id) => {
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
                fetch( `https://food-sharing-server-one.vercel.app/foodItem/${id}`, {
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
                            const remaining = myfoods.filter(c => c._id !== id);
                            setMyfoods(remaining);
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
                        <img src={foods?.food_image} className="w-40 rounded-md mr-4" alt="" />
                        <div className="text-left font-bold">{foods?.name}</div>

                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{foods?.location}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{foods?.status}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{foods?.quantity}</div>
                </td>
               
                <td className="md:pl-12 py-4 whitespace-nowrap flex gap-4">

                    <RxCross1 onClick={() => deleteFood(foods?._id)} className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxCross1>
                    {/* The button to open modal */}
                    <Link to={`/update/${foods?._id}`} htmlFor="my-modal"><RxPencil1 className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxPencil1></Link>
                    <Link to={`/managefood/${foods?.name}`}><button className="bg-orange-700 py-2 px-2 rounded-lg text-white">Manage Food</button></Link>

                    
                </td>
            </tr>
            
        </>
    );
};

export default MyFoodTable;





    