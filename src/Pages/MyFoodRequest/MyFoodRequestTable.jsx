import { RxPencil1, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyFoodRequestTable = ({ foods, myfoods, setMyfoods }) => {
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
                fetch( `https://food-sharing-server-one.vercel.app/reqFoodItem/${id}`, {
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
                    <div className="font-medium text-gray-800">{foods?.status}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{foods?.expiration_date}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{foods?.donation}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{foods?.time}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">{foods?.location}</div>
                </td>
               
                <td className="md:pl-12 py-4 whitespace-nowrap flex gap-4">

                    <input onClick={() => deleteFood(foods?._id)} className="py-2 bg-orange-600 text-white px-3 rounded-lg" type="submit" value="Cancel Request" />
                   
                   

                    
                </td>
            </tr>
            
        </>
    );
};

export default MyFoodRequestTable;





    