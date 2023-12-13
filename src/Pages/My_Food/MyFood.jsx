import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyFoodTable from "./MyFoodTable";
import { Helmet } from "react-helmet-async";




const MyFood = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    
    const [myfoods, setMyfoods] = useState([]);
    const url = `https://food-sharing-server-one.vercel.app/myFoodItem/?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyfoods(data);
            })
    }, [url])
    console.log(myfoods);

    

    return (
        <div className="w-full">
             <Helmet>
                <title>Good Pear | My Food</title>
            </Helmet>
            
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
                                                <div className="font-semibold text-left">Food Name & image</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Location</div>
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
                                            myfoods.map(foods => <MyFoodTable key={foods._id} foods={foods} myfoods={myfoods} setMyfoods={setMyfoods}></MyFoodTable>)
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