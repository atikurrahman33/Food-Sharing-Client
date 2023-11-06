import { Link } from "react-router-dom";
import Google from "../Login/Google/Google";


const SignUp = () => {

    return (
        <div className="flex py-14 gap-16 ml-32 ">

<div className="my-auto">
                <img className="h-[600px] w-[800px]" src="https://i.ibb.co/cNgFJqD/Atik.jpg" alt="" />
            </div>


            <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-600">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-blue-600">Name</label>
                            <div className="mt-2">
                                <input id="text" name="name" type="text" required className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-blue-600">Photo URL</label>
                            <div className="mt-2">
                                <input id="text" name="photoUrl" type="text" required className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-blue-600">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-blue-600">Password</label>
                               
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            <Google></Google>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have a account?
                        <Link to={`/login`}><a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Lonin</a></Link>
                    </p>
                </div>

            </div>
           
        </div>
    );
};

export default SignUp;