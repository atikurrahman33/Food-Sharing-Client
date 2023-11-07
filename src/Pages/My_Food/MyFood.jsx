import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyFoodTable from "./MyFoodTable";




const MyFood = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    
    const [mycars, setMycars] = useState([]);
    const url = `http://localhost:4000/myFoodItem/?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMycars(data);
            })
    }, [url])
    console.log(mycars);

    

    return (
        <div>
            
            <section className="antialiased bg-gray-100 text-gray-600 py-10 mb-10 px-4">
                <div className="flex flex-col justify-center">

                    <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="font-semibold text-gray-800 w-1/2">My Product</h2>
                           
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>

                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Car Name & image</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">User name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Status</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Quantity</div>
                                            </th>
                                           
                                           
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Action</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            mycars.map(cars => <MyFoodTable key={cars._id} cars={cars} mycars={mycars} setMycars={setMycars}></MyFoodTable>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyFood;